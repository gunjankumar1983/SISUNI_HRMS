
import React from 'react';
import { AppView } from '../types';
import Logo from './Logo';

interface SignUpProps {
  onNavigate: (view: AppView) => void;
}

const SignUp: React.FC<SignUpProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Top Header */}
      <header className="px-8 py-6 flex items-center justify-between bg-white border-b border-slate-50 sticky top-0 z-50">
        <div className="cursor-pointer" onClick={() => onNavigate(AppView.LANDING)}>
          <Logo />
        </div>
        <div className="flex items-center gap-6">
          <span className="text-slate-600 font-medium hidden sm:inline">Already have an account?</span>
          <button 
            onClick={() => onNavigate(AppView.LOGIN)}
            className="border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-2 rounded-full font-bold hover:bg-blue-50 transition-all text-sm"
          >
            Login
          </button>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row flex-1">
        {/* Left Side: Illustration Panel */}
        <div className="hidden lg:flex flex-[1.2] bg-[#F4F9FF] p-12 relative flex-col items-center justify-between min-h-[calc(100vh-88px)] sticky top-[88px]">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Connection Lines Container */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <div className="w-px h-[70%] dotted-line-v absolute"></div>
              <div className="w-[70%] h-px dotted-line-h absolute"></div>
            </div>

            {/* Center Hub */}
            <div className="relative z-20">
              <div className="w-32 h-32 bg-white rounded-full shadow-[0_20px_50px_rgba(59,130,246,0.15)] flex items-center justify-center border border-white">
                <div className="w-20 h-20 bg-gradient-to-br from-[#E1F0FF] to-[#B9D9FF] rounded-full flex items-center justify-center shadow-inner">
                  <i className="fas fa-key text-[#3B82F6] text-3xl"></i>
                </div>
              </div>
            </div>

            {/* Feature Cards Around Hub */}
            <FeatureNode 
              icon="fa-calendar-alt" 
              label="Time and Attendance Tracking" 
              className="top-[10%] left-1/2 -translate-x-1/2" 
            />
            <FeatureNode 
              icon="fa-user-cog" 
              label="Employee Self-Service" 
              className="top-[40%] left-[5%]" 
            />
            <FeatureNode 
              icon="fa-check-circle" 
              label="Request Approval" 
              className="top-[40%] right-[5%]" 
            />
            <FeatureNode 
              icon="fa-wallet" 
              label="Payroll Management" 
              sublabel="AUTOMATION"
              className="bottom-[10%] left-[10%]" 
            />
            <FeatureNode 
              icon="fa-chart-line" 
              label="Performance Management" 
              className="bottom-[10%] right-[10%]" 
            />
          </div>
          
          <div className="w-full text-center space-y-6">
            <h3 className="text-3xl font-black text-[#3B82F6] tracking-tight">All-in-One HR Solution</h3>
            <div className="flex justify-center gap-8">
               <div className="flex items-center gap-2">
                 <div className="w-6 h-6 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-[10px]">
                   <i className="fas fa-check"></i>
                 </div>
                 <span className="text-sm font-bold text-slate-700">Secure, Scalable, and Easy-to-Use</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-6 h-6 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-[10px]">
                   <i className="fas fa-check"></i>
                 </div>
                 <span className="text-sm font-bold text-slate-700">Automate Payroll and Compliance</span>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Scrollable Form Panel */}
        <div className="flex-1 bg-white px-8 md:px-16 py-16 lg:overflow-y-auto">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-black text-[#3B82F6] mb-6 tracking-tight">Start 14-day Free Trial</h1>
              <div className="inline-flex items-center gap-2 bg-[#1DBF4F] text-white px-8 py-2.5 rounded-full text-sm font-bold shadow-xl shadow-green-100 uppercase tracking-wider">
                No credit card required
              </div>
            </div>

            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onNavigate(AppView.DASHBOARD); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">First Name *</label>
                  <input 
                    type="text" 
                    placeholder="Enter your first name" 
                    className="w-full px-5 py-4 bg-[#FAFBFF] border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-[#3B82F6] outline-none transition-all placeholder:text-slate-300 font-medium" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Last Name *</label>
                  <input 
                    type="text" 
                    placeholder="Enter your last name" 
                    className="w-full px-5 py-4 bg-[#FAFBFF] border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-[#3B82F6] outline-none transition-all placeholder:text-slate-300 font-medium" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Organization Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter your organization name" 
                  className="w-full px-5 py-4 bg-[#FAFBFF] border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-[#3B82F6] outline-none transition-all placeholder:text-slate-300 font-medium" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address *</label>
                <input 
                  type="email" 
                  placeholder="Enter your organization email address" 
                  className="w-full px-5 py-4 bg-[#FAFBFF] border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-[#3B82F6] outline-none transition-all placeholder:text-slate-300 font-medium" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Phone Number *</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <select className="sm:w-40 px-5 py-4 bg-[#FAFBFF] border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-[#3B82F6] outline-none text-slate-400 font-medium appearance-none">
                    <option>Select country</option>
                  </select>
                  <input 
                    type="tel" 
                    placeholder="Enter phone number" 
                    className="flex-1 px-5 py-4 bg-[#FAFBFF] border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-[#3B82F6] outline-none transition-all placeholder:text-slate-300 font-medium" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700 ml-1">Choose subscription type *</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {['HRMS and Recruitment', 'HRMS', 'Recruitment'].map((type, i) => (
                    <label key={type} className="relative flex items-center p-4 bg-[#FAFBFF] border border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors">
                      <input 
                        type="radio" 
                        name="sub_type" 
                        defaultChecked={i === 0}
                        className="w-5 h-5 text-[#3B82F6] border-slate-300 focus:ring-[#3B82F6]" 
                      />
                      <span className="ml-3 text-sm font-semibold text-slate-600">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Password *</label>
                <div className="relative">
                  <input 
                    type="password" 
                    placeholder="Enter your password" 
                    className="w-full px-5 py-4 bg-[#FAFBFF] border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-[#3B82F6] outline-none transition-all placeholder:text-slate-300 font-medium" 
                    required 
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer hover:text-slate-600 p-2">
                    <i className="fas fa-eye-slash"></i>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#3B82F6] text-white py-5 rounded-2xl font-black text-xl hover:bg-[#2563EB] transition-all shadow-2xl shadow-blue-200 uppercase tracking-widest mt-4 hover:scale-[1.01] active:scale-95">
                Sign Up
              </button>

              <div className="pt-8 border-t border-slate-100">
                <p className="text-sm text-slate-400 text-center leading-relaxed">
                  By signing up you are agreeing to our <br className="hidden sm:block" />
                  <span className="text-[#3B82F6] font-bold cursor-pointer hover:underline">privacy policy</span>, 
                  <span className="text-[#3B82F6] font-bold cursor-pointer hover:underline mx-1">refund policy</span> 
                  and 
                  <span className="text-[#3B82F6] font-bold cursor-pointer hover:underline ml-1">terms and conditions</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

interface FeatureNodeProps {
  icon: string;
  label: string;
  sublabel?: string;
  className: string;
}

const FeatureNode: React.FC<FeatureNodeProps> = ({ icon, label, sublabel, className }) => (
  <div className={`absolute ${className} bg-white px-6 py-5 rounded-[24px] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-white flex flex-col items-center gap-3 z-10 w-52 text-center animate-in zoom-in slide-in-from-bottom-2 duration-700`}>
    <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 text-[#3B82F6] rounded-2xl flex items-center justify-center shadow-sm">
      <i className={`fas ${icon} text-lg`}></i>
    </div>
    <div className="space-y-1">
      <p className="text-xs font-black text-slate-800 leading-tight">{label}</p>
      {sublabel && <p className="text-[9px] text-[#3B82F6] font-black uppercase tracking-[0.15em] opacity-80">{sublabel}</p>}
    </div>
  </div>
);

export default SignUp;
