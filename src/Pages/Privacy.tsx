import React from 'react';
import PageTemplate from '../Components/PageTemplate';
import { Link } from 'react-router-dom';
import { Shield, Eye, Lock, Database, Bell, UserCheck } from 'lucide-react';

const highlights = [
  { icon: Shield, title: 'HIPAA Compliant', desc: 'We fully comply with all HIPAA regulations to protect your health information.' },
  { icon: Lock, title: 'Secure Encryption', desc: 'All data is encrypted in transit and at rest using industry-standard protocols.' },
  { icon: Eye, title: 'Transparency', desc: 'We are clear about what data we collect and how it is used.' },
  { icon: UserCheck, title: 'Your Rights', desc: 'You have full control over your personal data and can request deletion at any time.' },
  { icon: Database, title: 'Data Minimization', desc: 'We only collect the minimum data necessary to provide our services.' },
  { icon: Bell, title: 'Breach Notification', desc: 'We will notify you promptly in the event of any data security incident.' },
];

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect personal information that you provide directly to us, including your name, date of birth, contact details, health history, insurance information, and payment details. We also collect information automatically when you use our website, such as IP address, browser type, and usage data through cookies and similar technologies.',
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use your personal information to provide and improve our healthcare services, schedule and manage appointments, process payments, communicate with you about your care, send health reminders and follow-up information, comply with legal obligations, and prevent fraud and ensure the security of our systems.',
  },
  {
    title: '3. Health Information (PHI)',
    content: 'Your Protected Health Information (PHI) is handled in accordance with HIPAA regulations. We use and disclose PHI only as permitted by law — primarily to provide treatment, obtain payment, and conduct healthcare operations. We will obtain your authorization before using or disclosing PHI for any other purpose.',
  },
  {
    title: '4. Information Sharing',
    content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with healthcare providers involved in your treatment, insurance companies for billing, and service providers who assist our operations under strict confidentiality agreements. We may also disclose information as required by law or to protect safety.',
  },
  {
    title: '5. Data Retention',
    content: 'We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Medical records are typically retained for a minimum of 7 years as required by law. You may request deletion of non-medical personal data subject to our legal obligations.',
  },
  {
    title: '6. Your Rights',
    content: 'You have the right to access your personal information, request corrections to inaccurate data, request deletion of non-medical data, opt out of marketing communications, and file a complaint with a supervisory authority. To exercise these rights, please contact our Privacy Officer at privacy@vizclinic.com.',
  },
  {
    title: '7. Cookies & Tracking',
    content: 'Our website uses cookies to improve your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect the functionality of our website.',
  },
  {
    title: '8. Contact Us',
    content: 'If you have any questions about this Privacy Policy or our data practices, please contact our Privacy Officer at privacy@vizclinic.com or by mail at VIZ Clinic, A108 Adam Street, New York, NY 535022. We will respond to your inquiry within 30 days.',
  },
];

const Privacy = () => (
  <div className="min-h-screen font-roboto">
    <PageTemplate title="Privacy Policy" description="How we protect and handle your personal health information." isHome={false} />

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
          Privacy <span className="text-blue-600">Policy</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Your privacy is critically important to us. Learn how we collect, use, and protect your information. Last updated: April 2025.</p>
      </div>

      {/* Highlight Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12" data-aos="fade-up">
        {highlights.map((h, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-center" data-aos-delay={i * 60}>
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <h.icon size={18} className="text-blue-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">{h.title}</h4>
            <p className="text-slate-400 text-xs leading-relaxed">{h.desc}</p>
          </div>
        ))}
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8"
            data-aos="fade-up"
            data-aos-delay={idx * 40}
          >
            <h2 className="text-lg font-bold text-slate-900 mb-4">{section.title}</h2>
            <p className="text-slate-500 text-sm leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-center">
        <Shield size={40} className="text-white/40 mx-auto mb-4" />
        <h3 className="text-white font-bold text-xl mb-3">Your Privacy Is Our Priority</h3>
        <p className="text-blue-100 text-sm mb-6 max-w-lg mx-auto">We are committed to safeguarding your health information with the highest standards of security and transparency.</p>
        <Link to="/Contact" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm">
          Contact Privacy Team
        </Link>
      </div>
    </div>
  </div>
);

export default Privacy;
