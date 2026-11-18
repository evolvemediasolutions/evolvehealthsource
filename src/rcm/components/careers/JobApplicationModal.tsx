import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, FileText, CheckCircle2, AlertCircle, Loader2, Mail, User, Phone, Sparkles } from 'lucide-react';
import { getTrackingData } from '../../../utils/tracking';

export interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPosition?: string;
}

export default function JobApplicationModal({
  isOpen,
  onClose,
  initialPosition = 'Medical Coder (CPC)',
}: JobApplicationModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState(initialPosition);
  const [experience, setExperience] = useState('3-5 years');
  const [message, setMessage] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeBase64, setResumeBase64] = useState<string>('');
  const [dragActive, setDragActive] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialPosition) {
      setPosition(initialPosition);
    }
  }, [initialPosition]);

  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setErrorMessage('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleFileChange = (file: File) => {
    // Validate file type
    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    const isExtensionValid = /\.(pdf|doc|docx)$/i.test(file.name);

    if (!validTypes.includes(file.type) && !isExtensionValid) {
      setErrorMessage('Please upload a PDF or Word document (.pdf, .doc, .docx).');
      return;
    }

    // Limit to 5MB
    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage('File size exceeds 5MB limit. Please upload a smaller file.');
      return;
    }

    setErrorMessage('');
    setResumeFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setResumeBase64(result);
    };
    reader.onerror = () => {
      setErrorMessage('Failed to read the selected file. Please try another file.');
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const removeFile = () => {
    setResumeFile(null);
    setResumeBase64('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and phone number.');
      return;
    }

    if (!resumeFile) {
      setStatus('error');
      setErrorMessage('Please attach your resume (PDF or DOCX).');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const trackingData = getTrackingData();

      const payload = {
        name,
        email,
        phone,
        position,
        experience,
        message,
        resumeFileName: resumeFile.name,
        resumeBase64,
        ...trackingData,
      };

      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application. Please try again.');
      }

      setStatus('success');
    } catch (err: any) {
      console.error('Job application submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please check your connection and try again.');
    }
  };

  const handleResetAndClose = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    removeFile();
    setStatus('idle');
    setErrorMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
            className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close application dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {status === 'success' ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-950/60 border border-teal-300 dark:border-teal-700 text-teal-600 dark:text-teal-400 flex items-center justify-center mx-auto mb-6 shadow-md shadow-teal-500/10">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                  Application Submitted!
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-slate-900 dark:text-white">{name}</strong>! Your application for{' '}
                  <strong className="text-teal-600 dark:text-teal-400">{position}</strong> and your resume have been forwarded directly to{' '}
                  <span className="font-semibold text-slate-900 dark:text-white">chitra@evolvehealthsource.com</span>.
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/50 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 text-left">
                  <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">What happens next?</div>
                  Our talent acquisition team will review your qualifications and reach out via email or phone within 1–2 business days.
                </div>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-[#0F9D8A] hover:opacity-95 text-white font-bold rounded-full text-sm shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6 text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-teal-500" />
                    Career Opportunity
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    Apply for {position}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Fill in your contact information and upload your resume. Your application will be sent directly to our recruitment team at <strong className="text-slate-700 dark:text-slate-300">chitra@evolvehealthsource.com</strong>.
                  </p>
                </div>

                {/* Error Banner */}
                {status === 'error' && errorMessage && (
                  <div className="mb-5 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 text-red-700 dark:text-red-300 text-xs sm:text-sm flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {/* Position Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Position Applied For *
                    </label>
                    <div className="relative">
                      <select
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white font-medium focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                      >
                        <option value="Medical Coder (CPC)">Medical Coder (CPC) – Remote</option>
                        <option value="AR Follow-Up Lead">AR Follow-Up Lead – Full-Time</option>
                        <option value="Billing Specialist">Billing Specialist – Full-Time</option>
                        <option value="General Healthcare Application">General Healthcare Application</option>
                      </select>
                    </div>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +1 (424) 302-5536"
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Experience */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Relevant Experience *
                      </label>
                      <select
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white font-medium focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                      >
                        <option value="1-2 years">1–2 years</option>
                        <option value="3-5 years">3–5 years</option>
                        <option value="5-8 years">5–8 years</option>
                        <option value="8+ years">8+ years</option>
                      </select>
                    </div>
                  </div>

                  {/* Resume Upload Box */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Upload Resume (PDF or DOCX) *
                    </label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={(e) => e.target.files && e.target.files[0] && handleFileChange(e.target.files[0])}
                      className="hidden"
                    />

                    {resumeFile ? (
                      <div className="flex items-center justify-between p-3.5 bg-teal-50/60 dark:bg-teal-950/30 border border-teal-300 dark:border-teal-800 rounded-2xl">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div className="truncate text-left">
                            <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                              {resumeFile.name}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">
                              {(resumeFile.size / 1024).toFixed(0)} KB • Ready to send
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="p-1.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                          title="Remove file"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-2xl p-5 text-center cursor-pointer transition-all duration-200 ${
                          dragActive
                            ? 'border-teal-500 bg-teal-50/50 dark:bg-teal-950/20'
                            : 'border-slate-300 dark:border-slate-700 hover:border-teal-400 bg-slate-50/50 dark:bg-slate-800/40'
                        }`}
                      >
                        <Upload className="w-7 h-7 mx-auto text-teal-600 dark:text-teal-400 mb-2" />
                        <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                          Click to browse or drag and drop your resume
                        </p>
                        <p className="text-[11px] text-slate-400 mt-1">
                          Supported formats: PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Message / Cover Letter Note */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Brief Note / Certifications (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Certified CPC via AAPC, 4 years specialty ambulatory coding..."
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-teal-600 to-[#0F9D8A] hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Application to chitra@evolvehealthsource.com...</span>
                        </>
                      ) : (
                        <span>Submit Application</span>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-400 mt-2">
                      Applications are processed securely and sent to recruitment at chitra@evolvehealthsource.com.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
