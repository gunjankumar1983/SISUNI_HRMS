
import React, { useState } from 'react';
import { AppView } from '../types';
import PublicHeader from './PublicHeader';
import Footer from './Footer';

interface PricingProps {
  onNavigate: (view: AppView) => void;
}

const FAQS = [
  { 
    question: "Is there a trial period for the Starter Plan?", 
    answer: "Yes, we offer a trial period for the Starter Plan. You can explore the features and see how it fits your needs before committing to the subscription." 
  },
  { 
    question: "Do you offer custom pricing for large enterprises?", 
    answer: "Yes, for enterprises with unique requirements or larger employee counts, we provide custom pricing and personalized solutions." 
  },
  { 
    question: "Is my data secure with your HRMS?", 
    answer: "Absolutely. We use industry-standard encryption and security protocols to ensure your data is safe and compliant with global regulations." 
  },
  { 
    question: "Do you provide training for HRMS users?", 
    answer: "Yes, we offer comprehensive training sessions, documentation, and 24/7 support to ensure your team can maximize the platform's potential." 
  },
  { 
    question: "Can I switch plans or upgrade at any time?", 
    answer: "Yes, our plans are flexible. You can upgrade or downgrade your subscription at any point from your billing dashboard." 
  },
  { 
    question: "Can I customize the HRMS features based on my company's needs?", 
    answer: "Yes, higher-tier plans allow for deep customization, custom integrations, and specialized reporting modules tailored to your workflows." 
  },
  { 
    question: "Do you offer customer support for all plans?", 
    answer: "We offer varying levels of support across all plans, from basic email support for free trials to dedicated account managers for enterprise customers." 
  }
];

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [tab, setTab] = useState<'HRMS' | 'Recruiting'>('HRMS');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const hrmsPlans = [
    {
      name: 'Free Trial',
      desc: 'Explore the application for 14 days No Credit Card details required*',
      price: '0',
      subtext: '(Limited Employees)',
      extra: 'Not applicable',
      features: ['CoreHR', 'Attendance Management', 'Payroll', 'Leave Management', 'Performance Management', 'HR Management', 'Remainders and Alerts', 'Extensive Excel import & Export Facility', 'Report'],
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Professional Plan',
      desc: 'Unlock advanced automation features and seamless HR management',
      price: '3500',
      subtext: '(Including 50 employees)',
      extra: `${currency === 'INR' ? '₹71' : '$1'} per additional employee`,
      features: ['CoreHR', 'Attendance Management', 'Payroll', 'Leave Management', 'Performance Management', 'HR Management', 'Remainders and Alerts', 'Extensive Excel import & Export Facility', 'Report', 'Support Plans'],
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Enterprise Plan',
      desc: 'Comprehensive plan designed to engage employees and take your organization to new heights.',
      price: '5666',
      subtext: '(Including 50 employees)',
      extra: `${currency === 'INR' ? '₹125' : '$2'} per additional employee`,
      features: ['Everything in Professional', 'Payroll', 'Project Management', 'Training & Development (LMS)', 'Report', 'Support Plans'],
      buttonText: 'Start Free Trial',
      recommended: true
    },
    {
      name: 'Custom Plan',
      desc: 'Tailored to your needs — pay only for the features you use.Get the perfect HR solution within your budget!',
      price: 'On Demand',
      subtext: '',
      extra: '',
      features: ['Everything in Enterprise', 'Custom Integrations', 'Custom Features', 'Custom Compliance and reports'],
      buttonText: 'Contact Us'
    }
  ];

  const recruitingPlans = [
    {
      name: 'Free Trial',
      desc: 'Explore the application for 14 days No Credit Card details required*',
      price: '0',
      subtext: 'per recruiter / month',
      features: ['Job Requisition Management', 'Candidate Management', 'AI Recommendations', 'Reports & Analytics', 'Integrations'],
      buttonText: 'Start Free Trial',
      extra: 'Not applicable'
    },
    {
      name: 'Professional Plan',
      desc: 'Unlock advanced automation features and seamless HR management',
      price: currency === 'INR' ? '2499' : '30',
      subtext: 'per recruiter / month',
      features: ['Job Requisition Management', 'Candidate Management', 'AI Recommendations', 'Reports & Analytics', 'Integrations', 'Support Plans'],
      buttonText: 'Start Free Trial',
      extra: 'Not applicable'
    },
    {
      name: 'Enterprise Plan',
      desc: 'Comprehensive plan designed to engage employees and take your organization to new heights.',
      price: currency === 'INR' ? '3499' : '45',
      subtext: 'per recruiter / month',
      features: ['Everything in Professional', 'Candidate Management', 'AI Recommendations', 'Reports & Analytics', 'Integrations', 'Support Plans'],
      buttonText: 'Start Free Trial',
      recommended: true,
      extra: 'Not applicable'
    },
    {
      name: 'Custom Plan',
      desc: 'Tailored to your needs — pay only for the features you use.Get the perfect HR solution within your budget!',
      price: 'On Demand',
      subtext: '',
      features: ['Everything in Enterprise', 'Custom Integrations', 'Custom Features', 'Custom Compliance and reports'],
      buttonText: 'Contact Us',
      extra: ''
    }
  ];

  const currentPlans = tab === 'HRMS' ? hrmsPlans : recruitingPlans;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <PublicHeader onNavigate={onNavigate} />

      <main className="flex-1 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4 mb-12">
          <h1 className="text-4xl font-black text-[#0D4E96] tracking-tight">Simple and Transparent Pricing</h1>
          <p className="text-slate-500 font-medium">Got a question about our pricing? <span className="text-blue-500 cursor-pointer hover:underline">Contact us</span></p>
          
          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <span className={`text-sm font-bold ${currency === 'INR' ? 'text-slate-900' : 'text-slate-400'}`}>INR</span>
            <button 
              onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
              className="w-12 h-6 bg-slate-200 rounded-full relative p-1 transition-colors hover:bg-slate-300"
            >
              <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${currency === 'USD' ? 'translate-x-6' : ''}`}></div>
            </button>
            <span className={`text-sm font-bold ${currency === 'USD' ? 'text-slate-900' : 'text-slate-400'}`}>USD</span>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mt-12">
            <div className="flex bg-white rounded-lg shadow-sm p-1 border border-slate-100">
              <button 
                onClick={() => setTab('HRMS')}
                className={`px-12 py-3 text-sm font-bold rounded-md transition-all ${tab === 'HRMS' ? 'text-[#D11D25] border-b-2 border-[#D11D25]' : 'text-slate-400 hover:text-slate-600'}`}
              >
                HRMS
              </button>
              <button 
                onClick={() => setTab('Recruiting')}
                className={`px-12 py-3 text-sm font-bold rounded-md transition-all ${tab === 'Recruiting' ? 'text-[#D11D25] border-b-2 border-[#D11D25]' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Recruiting
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {currentPlans.map((plan, idx) => (
            <div key={idx} className={`bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col transition-all hover:shadow-lg ${plan.recommended ? 'ring-2 ring-[#1DBF4F]' : ''}`}>
              {plan.recommended && (
                <div className="bg-[#1DBF4F] text-white text-[12px] font-black py-2 text-center uppercase tracking-widest">
                  Recommended
                </div>
              )}
              <div className="p-8 text-center flex-1">
                <h3 className="text-xl font-black text-slate-900 mb-4">{plan.name}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium h-16">{plan.desc}</p>
                
                <div className="mt-8 mb-4">
                  <span className="text-4xl font-black text-slate-900">
                    {plan.price !== 'On Demand' ? (currency === 'INR' ? '₹' : '$') : ''}{plan.price}
                  </span>
                  {plan.price !== 'On Demand' && <span className="text-xs font-bold text-slate-400 ml-1">/month, billed annually</span>}
                </div>
                
                <p className="text-[12px] font-bold text-slate-400">{plan.subtext}</p>
                <p className="text-[14px] font-black text-slate-900 mt-1 mb-8">{plan.extra || 'Not applicable'}</p>

                <button 
                  onClick={() => onNavigate(AppView.SIGNUP)}
                  className="w-full bg-[#0D70D0] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#0b5eaf] transition-all mb-10 shadow-lg shadow-blue-100"
                >
                  {plan.buttonText}
                </button>

                <div className="text-left space-y-4 border-t border-slate-50 pt-8">
                  {plan.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      {feat.startsWith('Everything') ? (
                        <p className="text-[13px] font-bold text-slate-500 italic mx-auto text-center w-full">{feat}</p>
                      ) : (
                        <>
                          <i className="fas fa-caret-right text-slate-300 mt-1"></i>
                          <span className="text-[13px] font-bold text-slate-700">{feat}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mt-32 mb-16">
          <h2 className="text-3xl font-black text-[#0D253F] mb-12 text-center md:text-left">Frequently asked questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="text-[15px] font-black text-slate-800 text-left">{faq.question}</span>
                  <i className={`fas fa-chevron-${openFaq === idx ? 'up' : 'down'} text-slate-400 text-sm transition-transform`}></i>
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-6 text-slate-500 text-[14px] font-medium leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Pricing;
