import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Mail, MapPin, Check } from 'lucide-react';

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [clinic, setClinic] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [system, setSystem] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    {
      icon: Phone,
      iconBg: 'bg-[#FFF0EB]',
      iconColor: 'text-[#EF7E56]',
      title: 'Call us',
      value: '+91 90254 81909 · 10am – 7pm IST',
      href: 'tel:+919025481909'
    },
    {
      icon: MessageSquare,
      iconBg: 'bg-[#E6F4EA]',
      iconColor: 'text-[#137333]',
      title: 'WhatsApp',
      value: 'Send us a message →',
      href: 'https://wa.me/919025481909',
      isLink: true
    },
    {
      icon: Mail,
      iconBg: 'bg-[#E8F0FE]',
      iconColor: 'text-[#1A73E8]',
      title: 'Email',
      value: 'chitra@myclinicboost.com',
      href: 'mailto:chitra@myclinicboost.com',
      isLink: true
    },
    {
      icon: MapPin,
      iconBg: 'bg-[#FEF7E0]',
      iconColor: 'text-[#B06000]',
      title: 'Office',
      value: 'US'
    }
  ];

  return (
    <section className="py-24 bg-[#E9F0F8]/40 text-left relative z-10 w-full border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Contact Info) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="text-[#EF7E56] text-xs font-bold uppercase tracking-wider">
                LET'S TALK
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-[#06244C] tracking-tight leading-[1.1] text-left">
                Claim your free <br /> digital practice <br />
                <span className="relative inline-block z-10 px-1">
                  <span className="absolute inset-x-0 bottom-2.5 h-[16px] bg-[#D4F1F4]/80 -z-10 rounded-sm"></span>
                  audit.
                </span>
              </h2>
              <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed select-all">
                30 minutes. Zero pitch. We'll audit your current website, Google profile and content — and give you 3 specific changes to make this week, even if you never work with us.
              </p>
            </div>

            {/* Contact Channels */}
            <div className="space-y-5">
              {contactItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-4 text-left select-all">
                    <div className={`w-10 h-10 rounded-full ${item.iconBg} ${item.iconColor} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">
                        {item.title}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`text-sm font-semibold ${item.isLink ? 'text-[#0B4F9C] hover:underline' : 'text-slate-700'}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-slate-700">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (Claim Form Card) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[28px] p-6 sm:p-10 shadow-xl border border-slate-150 relative z-10">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-850">Audit Requested!</h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                    Thank you, Dr. {name || 'Partner'}! We have received your practice details and will connect with you via calendar invite in one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1 text-left">
                    <h3 className="text-xl font-bold text-slate-900">Tell us about your clinic</h3>
                    <p className="text-slate-400 text-xs font-medium">
                      We'll respond within one business day with a calendar invite for your free audit.
                    </p>
                  </div>

                  {/* Form Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                    {/* Your Name */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">
                        Your name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dr. Karthik Raman"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 90254 81909"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@yourclinic.in"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Clinic name */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">
                        Clinic name
                      </label>
                      <input
                        type="text"
                        required
                        value={clinic}
                        onChange={(e) => setClinic(e.target.value)}
                        placeholder="Smile Studio Dental"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Your specialty dropdown */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">
                        Your specialty
                      </label>
                      <select
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 font-medium focus:outline-none focus:border-blue-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:18px] bg-[right_12px_center] bg-no-repeat"
                      >
                        <option value="">Select specialty...</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="dermatology">Dermatology</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="dentistry">Dentistry</option>
                        <option value="pediatrics">Pediatrics</option>
                        <option value="other">Other specialty</option>
                      </select>
                    </div>

                    {/* Interested in dropdown */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">
                        Interested in
                      </label>
                      <select
                        value={system}
                        onChange={(e) => setSystem(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 font-medium focus:outline-none focus:border-blue-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:18px] bg-[right_12px_center] bg-no-repeat"
                      >
                        <option value="">Choose a system...</option>
                        <option value="influencer">The Doctor Influencer System</option>
                        <option value="clinic">The Clinic Growth System</option>
                        <option value="hospital">The Hospital Authority Package</option>
                      </select>
                    </div>
                  </div>

                  {/* Textarea */}
                  <div className="text-left">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">
                      What's the #1 thing you'd like to fix?
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. We rank on page 3 of Google for our area and walk-ins have dropped 30% this year..."
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#EF7E56] hover:bg-[#d96739] text-white rounded-2xl font-bold text-sm tracking-wide transition-all text-center cursor-pointer shadow-lg shadow-orange-500/10 block"
                  >
                    Book My Free Audit →
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
