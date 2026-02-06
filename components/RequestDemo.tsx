
import React from 'react';
import { AppView } from '../types';
import PublicHeader from './PublicHeader';

interface RequestDemoProps {
  onNavigate: (view: AppView) => void;
}

const RequestDemo: React.FC<RequestDemoProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <PublicHeader onNavigate={onNavigate} />

      <main className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side: Illustration and Benefits */}
        <div className="hidden lg:flex flex-1 bg-[#F4F9FF] p-16 relative flex-col justify-center">
          <div className="max-w-xl mx-auto space-y-10">
            <div className="space-y-4">
              <p className="text-[#0D70D0] font-bold text-xl tracking-tight">Boost your HR teams productivity</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0D253F] leading-[1.1]">
                HR and Payroll Solutions to Optimize Your HR Processes
              </h2>
            </div>

            <div className="space-y-6">
              {[
                'Secure, Scalable, and Easy-to-Use',
                'Automate Payroll and Compliance',
                'Intelligent Reporting and Insights',
                'Seamless Onboarding and Beyond',
                'Unlock Effortless HR Management'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-[#1DBF4F] text-white rounded-full flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-[10px]"></i>
                  </div>
                  <span className="text-slate-800 font-bold text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-10 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="HR Professional" 
                className="w-full h-auto object-contain max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Demo Form */}
        <div className="flex-1 bg-white px-8 md:px-20 py-16 overflow-y-auto">
          <div className="max-w-xl mx-auto">
            <h1 className="text-5xl font-black text-[#D11D25] text-center mb-16 tracking-tight">
              Request For Demo
            </h1>

            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Demo Request Sent!"); onNavigate(AppView.LANDING); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-800">Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="Enter name" 
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0D70D0] outline-none transition-all placeholder:text-slate-400 font-medium" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-800">Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="Enter organization email address" 
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0D70D0] outline-none transition-all placeholder:text-slate-400 font-medium" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-800">Company Size *</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0D70D0] outline-none text-slate-600 font-medium appearance-none">
                    <option>Company Size</option>
                    <option>1-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-500 employees</option>
                    <option>500+ employees</option>
                  </select>
                  <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-800">Phone Number *</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative sm:w-48">
                    <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0D70D0] outline-none text-slate-600 font-medium appearance-none">
                      <option>Select country</option>
                      <option>India (+91)</option>
                      <option>USA (+1)</option>
                    </select>
                    <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Enter phone number" 
                    className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0D70D0] outline-none transition-all placeholder:text-slate-400 font-medium" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-800">Organization Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter your organization name" 
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0D70D0] outline-none transition-all placeholder:text-slate-400 font-medium" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-800">Additional Information</label>
                <textarea 
                  placeholder="Enter information here" 
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0D70D0] outline-none transition-all placeholder:text-slate-400 resize-none font-medium"
                ></textarea>
              </div>

              <button className="w-full bg-[#FFB800] text-slate-900 py-4 rounded-lg font-black text-xl hover:bg-[#e6a600] transition-all shadow-xl shadow-amber-100 uppercase tracking-widest mt-4">
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="py-8 bg-slate-50 border-t border-slate-100 px-8 flex justify-between items-center text-xs text-slate-500 font-bold uppercase tracking-widest">
        <p>&copy; 2024 RapidHR. All rights reserved.</p>
        <div className="flex gap-8">
          <span className="cursor-pointer hover:text-[#0D70D0]">Privacy Policy</span>
          <span className="cursor-pointer hover:text-[#0D70D0]">Terms of Service</span>
        </div>
      </footer>
    </div>
  );
};

export default RequestDemo;
