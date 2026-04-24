import React, { useState } from 'react';
import PageTemplate from '../Components/PageTemplate';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: 'How do I book an appointment?', a: 'You can book an appointment online through our website by visiting the Appointment page, or call us at +1 5589 55488 55. We recommend booking online for the fastest experience.' },
  { q: 'What insurance plans do you accept?', a: 'We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealth, and many more. Contact our billing department to verify your specific coverage.' },
  { q: 'What should I bring to my first appointment?', a: 'Please bring a valid government-issued ID, your insurance card, a list of current medications, any relevant medical records, and arrive 15 minutes early to complete paperwork.' },
  { q: 'Do you offer telehealth consultations?', a: 'Yes! We offer virtual consultations for many specialties. Telehealth appointments can be booked through our online portal and are available to patients nationwide.' },
  { q: 'How can I access my medical records?', a: 'Medical records can be accessed through our secure patient portal. You can log in at any time to view test results, visit summaries, prescriptions, and more.' },
  { q: 'What are your emergency hours?', a: 'Our emergency department is open 24 hours a day, 7 days a week, 365 days a year. For life-threatening emergencies, please call 911 immediately.' },
  { q: 'How do I get a prescription refill?', a: 'Prescription refills can be requested through the patient portal, by calling your doctor\'s office, or by contacting your pharmacy directly if you have remaining refills.' },
  { q: 'Do you offer payment plans?', a: 'Yes, we offer flexible payment plans and financial assistance programs. Please contact our billing department to discuss your options and eligibility.' },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 min-h-screen font-roboto">
      <PageTemplate title="FAQ" description="Find answers to your most common questions." isHome={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Can't find what you're looking for? Contact our support team and we'll be happy to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left info */}
          <div className="hidden lg:block" data-aos="fade-right">
            <div className="bg-blue-600 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-8">Can't find the answer you're looking for? Please chat with our friendly team.</p>
              <a href="/Contact" className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm">
                Contact Support
              </a>
            </div>
            <div className="mt-6 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-3">Emergency Hotline</h4>
              <p className="text-2xl font-bold text-blue-600">+855 126 21443</p>
              <p className="text-slate-400 text-sm mt-1">Available 24/7</p>
            </div>
          </div>

          {/* FAQ accordion */}
          <div className="lg:col-span-2 space-y-4" data-aos="fade-left">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left group"
                  onClick={() => setOpen(open === idx ? null : idx)}
                >
                  <span className={`font-semibold text-base transition-colors ${open === idx ? 'text-blue-600' : 'text-slate-800 group-hover:text-blue-600'}`}>{faq.q}</span>
                  <span className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {open === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </button>
                {open === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
