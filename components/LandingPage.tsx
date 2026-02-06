
import React from 'react';
import { AppView } from '../types.ts';
import Footer from './Footer.tsx';

interface LandingPageProps {
  onNavigate: (view: AppView) => void;
}

const FEATURE_CARDS = [
  { title: 'Core HRMS', desc: 'Employee management, directory, workflows, self-service, document management', icon: 'fa-users', bg: 'bg-sky-50', color: 'text-sky-500' },
  { title: 'Attendance', desc: 'Monitor attendance, schedule smart shifts, and make many attendance methods possible.', icon: 'fa-calendar-check', bg: 'bg-emerald-50', color: 'text-emerald-500' },
  { title: 'Leave Management', desc: 'Configure every type of leave policy and use leave dashboards and reports for tracking', icon: 'fa-calendar-minus', bg: 'bg-rose-50', color: 'text-rose-500' },
  { title: 'Payroll', desc: 'End-to-end payroll processing, taxing, benefits tracking, exemptions, User Payslip.', icon: 'fa-money-bill-transfer', bg: 'bg-amber-50', color: 'text-amber-500' },
  { title: 'Task Management', desc: 'Plan tasks, track and complete them efficiently, delegate task and set remainders', icon: 'fa-list-check', bg: 'bg-indigo-50', color: 'text-indigo-500' },
  { title: 'Performance Management', desc: 'Staff evaluations, goal setting, talent management and ongoing 360-degree feedback.', icon: 'fa-chart-line', bg: 'bg-orange-50', color: 'text-orange-500' },
  { title: 'Onboarding', desc: 'Acquire talents, skills and have a smooth run for employees from day one.', icon: 'fa-handshake', bg: 'bg-yellow-50', color: 'text-yellow-500' },
  { title: 'Recruitment', desc: 'AI enabled engine for hiring, skill set matches, tracking interviews and feedback.', icon: 'fa-user-plus', bg: 'bg-purple-50', color: 'text-purple-500' },
];

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-24 pb-12 px-6">
        <div className="max-w-[1440px] mx-auto text-center space-y-8">
          <h1 className="text-5xl lg:text-7xl font-black text-[#0D4E96] leading-[1.1] tracking-tight animate-in fade-in slide-in-from-top-4 duration-700">
            All-in-One <span className="text-slate-900">HR, Payroll &</span><br />
            <span className="text-slate-900">Recruitment Platform</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-500 text-lg font-medium leading-relaxed opacity-80">
            Core HR management, performance management, workflows, attendance management, payroll, leave management, task management, onboarding and recruitment made simple.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex flex-col items-center gap-3">
              <button 
                onClick={() => onNavigate(AppView.SIGNUP)}
                className="bg-[#1DBF4F] text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-[#19a343] transition-all shadow-xl shadow-green-100"
              >
                Start 14-day Free Trial
              </button>
              <p className="flex items-center gap-2 text-[12px] font-black text-slate-400 uppercase tracking-widest">
                <i className="fas fa-check-circle text-emerald-500"></i> No Credit Card Required
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <button 
                onClick={() => onNavigate(AppView.DEMO)}
                className="bg-[#0D70D0] text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-[#0b5eaf] transition-all shadow-xl shadow-blue-100"
              >
                Schedule a Demo
              </button>
              <p className="flex items-center gap-2 text-[12px] font-black text-slate-400 uppercase tracking-widest">
                <i className="fas fa-check-circle text-emerald-500"></i> No Commitment
              </p>
            </div>
          </div>

          {/* Multi-Device Mockup Area */}
          <div className="relative mt-20 max-w-6xl mx-auto animate-in fade-in zoom-in duration-1000">
             <img 
               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
               className="w-full h-auto rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-8 border-slate-900"
               alt="Dashboard Mockup"
             />
             <div className="absolute -bottom-10 -right-10 w-64 h-80 bg-slate-900 rounded-3xl border-4 border-slate-800 shadow-2xl hidden lg:block overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-80" alt="Mobile App" />
             </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics Section */}
      <section className="py-12 border-y border-slate-50 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] text-center mb-10">Trusted By</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-5 justify-center md:border-r border-slate-200">
               <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl"><i className="fas fa-building-circle-check"></i></div>
               <div><h4 className="text-2xl font-black text-slate-800">10K+</h4><p className="text-xs font-bold text-slate-400 uppercase">Companies</p></div>
            </div>
            <div className="flex items-center gap-5 justify-center md:border-r border-slate-200">
               <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl"><i className="fas fa-user-group"></i></div>
               <div><h4 className="text-2xl font-black text-slate-800">1.5M</h4><p className="text-xs font-bold text-slate-400 uppercase">Employees</p></div>
            </div>
            <div className="flex items-center gap-5 justify-center md:border-r border-slate-200">
               <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-xl"><i className="fas fa-cubes"></i></div>
               <div><h4 className="text-2xl font-black text-slate-800">150+</h4><p className="text-xs font-bold text-slate-400 uppercase">Features</p></div>
            </div>
            <div className="flex items-center gap-5 justify-center">
               <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center text-xl"><i className="fas fa-earth-americas"></i></div>
               <div><h4 className="text-2xl font-black text-slate-800">100+</h4><p className="text-xs font-bold text-slate-400 uppercase">Cities</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-[#0D253F] tracking-tight uppercase">Platform Features</h2>
            <p className="text-lg text-slate-500 font-medium">Everything you need to create a high-performance culture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURE_CARDS.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col hover:shadow-xl transition-all group">
                <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3 className="text-xl font-black text-[#0D253F] mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium flex-1 opacity-80 mb-6">{feature.desc}</p>
                <button className="text-[#3B82F6] font-black text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Explore more <i className="fas fa-arrow-right-long"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust CTA Section */}
      <section className="bg-slate-50 py-24 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl font-black text-[#0D253F] tracking-tight leading-tight">
            Advanced Sourcing Techniques for Modern HR Teams
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            SisuniHRMS ATS empowers you to cast a wider net and land top talent with its robust candidate sourcing capabilities. 
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <button 
              onClick={() => onNavigate(AppView.SIGNUP)}
              className="bg-[#1DBF4F] text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-[#19a343] transition-all shadow-xl shadow-green-100"
            >
              Start Free Trial
            </button>
            <button 
              onClick={() => onNavigate(AppView.DEMO)}
              className="bg-[#0D70D0] text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-[#0b5eaf] transition-all shadow-xl shadow-blue-100"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default LandingPage;
