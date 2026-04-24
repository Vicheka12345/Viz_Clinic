import React from 'react';
import PageTemplate from '../Components/PageTemplate';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using VIZ Clinic\'s website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and patients who access or use our service.',
  },
  {
    title: '2. Medical Information Disclaimer',
    content: 'The information provided on this website is for general informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.',
  },
  {
    title: '3. Appointment Policies',
    content: 'Appointments must be cancelled at least 24 hours in advance. Failure to cancel within this timeframe may result in a cancellation fee. We reserve the right to reschedule appointments in emergency situations. Patients who arrive more than 15 minutes late may need to reschedule their appointment. We strive to maintain punctuality and appreciate your understanding.',
  },
  {
    title: '4. Patient Responsibilities',
    content: 'Patients are responsible for providing accurate and complete medical history information. You agree to inform our medical staff of all medications, allergies, and previous medical conditions. Providing false or misleading information may affect the quality of care you receive and may result in termination of services.',
  },
  {
    title: '5. Privacy and Data Protection',
    content: 'We are committed to protecting your personal and medical information in accordance with applicable healthcare privacy laws, including HIPAA. Your medical records and personal information will only be shared with authorized healthcare providers involved in your care, or as required by law. For more details, please read our Privacy Policy.',
  },
  {
    title: '6. Intellectual Property',
    content: 'All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of VIZ Clinic and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our explicit written permission.',
  },
  {
    title: '7. Limitation of Liability',
    content: 'VIZ Clinic shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our liability is limited to the maximum extent permitted by law. This does not affect our liability for personal injury caused by our negligence.',
  },
  {
    title: '8. Changes to Terms',
    content: 'We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes your acceptance of the new terms. We encourage you to review these terms periodically.',
  },
];

const Term = () => (
  <div className="bg-slate-50 min-h-screen font-roboto">
    <PageTemplate title="Terms & Conditions" description="Our terms and conditions for using our healthcare services." isHome={false} />

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
          Terms & <span className="text-blue-600">Conditions</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Please read these terms carefully before using our services. Last updated: April 2025.</p>
      </div>

      {/* Intro Card */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10" data-aos="fade-up">
        <p className="text-blue-800 text-sm leading-relaxed">
          <strong>Important Notice:</strong> These Terms and Conditions govern your use of VIZ Clinic's website and services. By using our services, you agree to comply with and be bound by these terms. If you have any questions, please contact our legal team at <a href="mailto:legal@vizclinic.com" className="underline hover:text-blue-600">legal@vizclinic.com</a>.
        </p>
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
      <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-center">
        <h3 className="text-white font-bold text-xl mb-3">Have Questions About Our Terms?</h3>
        <p className="text-slate-400 text-sm mb-6">Our legal and support team is here to help clarify any concerns.</p>
        <Link to="/Contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
          Contact Our Team
        </Link>
      </div>
    </div>
  </div>
);

export default Term;
