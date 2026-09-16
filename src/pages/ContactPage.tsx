import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SEOHead } from '../components/common/SEOHead';

export const ContactPage: React.FC = () => {
  const { siteSettings, addInquiry } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [projectType, setProjectType] = useState('Quality Engineering');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      addInquiry({
        name,
        email,
        company,
        role,
        projectType,
        message
      });

      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setRole('');
    setProjectType('Quality Engineering');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SEOHead
        title="Contact Abu Naser Maaz – Quality Engineering & Technical Delivery"
        description="Get in touch with Abu Naser Maaz for QA consulting, technical project delivery coordination, AI testing evaluation, or XR simulations."
        breadcrumbs={[
          { name: 'Contact', item: 'https://abunasarmaaz.com/#/contact' }
        ]}
      />

      <Breadcrumb items={[{ name: 'Contact' }]} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Info & Availability (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xs space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#146EF5] text-xs font-bold uppercase tracking-wider mb-3">
                <span>Direct Contact</span>
              </div>
              <h1 className="text-3xl font-extrabold text-[#071A33] tracking-tight">
                Let's Discuss Your Product
              </h1>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Whether you're preparing for a critical release, looking to establish a structured testing practice, or seeking technical project delivery support.
              </p>
            </div>

            {/* Direct channels */}
            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${siteSettings.email}`}
                className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-[#146EF5] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Direct Email</span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-[#146EF5] transition-colors">
                    {siteSettings.email}
                  </span>
                </div>
              </a>

              <a
                href={siteSettings.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Professional Network</span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-[#146EF5] transition-colors flex items-center gap-1">
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            </div>

            {/* Availability Note */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Clock className="w-4 h-4 text-[#146EF5]" />
                <span>Response Time: Typically within 24–48 hours</span>
              </div>
              <p className="text-slate-500 pl-6">
                Directly reviewed by Abu Naser Maaz. No automated routing.
              </p>
            </div>
          </div>

          {/* Quick FAQ / Guidance */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 space-y-3 text-xs text-slate-600">
            <h3 className="font-bold text-slate-800 text-sm">Best fit engagements:</h3>
            <ul className="space-y-1.5 list-disc pl-4">
              <li>Pre-launch functional & regression test sweeps for Web/Mobile</li>
              <li>Technical sprint coordination & defect triage sessions</li>
              <li>AI application non-deterministic prompt & output validation</li>
              <li>Spatial QA & ergonomics testing for Meta Quest VR apps</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-[#071A33]">Message Received!</h2>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <strong>{name}</strong>. Your inquiry regarding <strong>{projectType}</strong> has been logged. Abu Naser will review your details and respond via email shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#071A33]">Send a Message</h2>
                  <p className="text-xs text-slate-500 mt-1">Fill out the details below to start a conversation.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={e => setCompany(e.target.value)}
                      placeholder="e.g. Acme Tech / Stealth"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Your Role
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={e => setRole(e.target.value)}
                      placeholder="e.g. Founder, VP Product, PM"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Engagement Focus / Domain
                  </label>
                  <select
                    value={projectType}
                    onChange={e => setProjectType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                  >
                    <option value="Quality Engineering">Quality Engineering & Full QA Audit</option>
                    <option value="Software Testing">Web or Mobile App Testing</option>
                    <option value="AI Testing">AI Application Testing & Prompt Evaluation</option>
                    <option value="Technical Project Delivery">Technical Project Delivery & Coordination</option>
                    <option value="Game & XR Testing">Game QA / VR Spatial Testing</option>
                    <option value="General Collaboration">General Inquiries / Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    How Can I Help? (Message) *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Tell me about your product, current testing setup, timeline, or key challenges..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#146EF5] hover:bg-[#2F80FF] text-white font-semibold text-sm transition-all duration-150 flex items-center justify-center gap-2 shadow-xs cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
