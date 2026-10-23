import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { getTrackingData, pushGenerateLeadEvent } from '../../utils/tracking';
import SEO from '../../components/SEO';

export default function Contact() { 
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // 1. Retrieve UTM parameters and referrer from landing URL in sessionStorage
      const trackingData = getTrackingData();

      // 2. Attach tracking data to form payload
      const payload = {
        firstName,
        lastName,
        email,
        message,
        ...trackingData,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      // Only proceed if response is 2xx
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      // 3. Push the dataLayer event generate_lead only after a 2xx response
      pushGenerateLeadEvent({
        firstName,
        lastName,
        email,
        ...trackingData,
      });

      setStatus('success');
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');

      // 4. Redirect to /contact/thank-you
      setTimeout(() => {
        navigate('/contact/thank-you');
      }, 600);
    } catch (err: any) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to submit form. Please check your connection and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contact Us | Request an RCM Consultation | Evolve Health Source"
        description="Get in touch with Evolve Health Source. Request a free revenue cycle audit, billing performance assessment, or specialty coding consultation."
        canonical="/contact"
      />
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team to discuss how we can optimize your revenue cycle."
        breadcrumb="Home / Contact Us" 
      />
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Talk</h2>
            <p className="text-lg text-gray-600 mb-8">
              Fill out the form and our team will get back to you within 24 hours to schedule your consultation.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Phone</div>
                  <div className="font-semibold text-gray-900">1-800-555-0199</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Email</div>
                  <div className="flex flex-col gap-1 font-semibold text-gray-900">
                    <a href="mailto:rory@evolvehealthsource.com" className="hover:text-primary-600 transition-colors">
                      rory@evolvehealthsource.com
                    </a>
                    <a href="mailto:connect@evolvehealthsource.com" className="hover:text-primary-600 transition-colors">
                      connect@evolvehealthsource.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Office</div>
                  <div className="font-semibold text-gray-900">123 Healthcare Blvd, Chicago, IL 60601</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" 
                    placeholder="John" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" 
                    placeholder="Doe" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" 
                  placeholder="john@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-lg bg-green-50 text-green-800 border border-green-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <div className="text-sm font-medium">Thank you! Your message has been sent successfully. Redirecting...</div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-lg bg-red-50 text-red-800 border border-red-200 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <div className="text-sm font-medium">{errorMessage || 'Something went wrong. Please try again.'}</div>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ); 
}
