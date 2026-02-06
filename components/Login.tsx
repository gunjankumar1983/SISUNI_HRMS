
import React, { useState } from 'react';
import { AppView } from '../types';
import Logo from './Logo';

interface LoginProps {
  onLogin: (e: React.FormEvent) => void;
  onNavigate: (view: AppView) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('demo@sisunihrms.com');
  const [error, setError] = useState('');

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans">
      {/* Left Side: Employee Services Carousel */}
      <div className="hidden lg:flex flex-1 bg-slate-50 items-center justify-center p-12 border-r border-slate-100">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="relative aspect-square w-full flex items-center justify-center">
             <div className="relative z-10">
               <img 
                 src="https://cdni.iconscout.com/illustration/premium/thumb/employee-management-illustration-download-in-svg-png-gif-file-formats--hr-staff-manpower-business-pack-illustrations-4715456.png" 
                 alt="Employee Services" 
                 className="w-full h-auto drop-shadow-2xl"
               />
             </div>
             <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl -z-10 scale-90"></div>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-2xl font-black text-slate-800">Employee Services</h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Put control at their fingertips for easy access to requests and data.
            </p>
          </div>

          <div className="flex justify-center gap-2 pt-4">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-md w-full animate-in fade-in zoom-in duration-500">
          {/* Logo */}
          <div className="flex justify-center mb-8 cursor-pointer" onClick={() => onNavigate(AppView.LANDING)}>
            <Logo className="scale-125" />
          </div>

          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Login</h1>
            <p className="text-slate-400 font-medium">Welcome back! Please login to your account</p>
          </div>

          <form onSubmit={onLogin} className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 ml-1">Email Address *</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                className={`w-full px-4 py-3 bg-[#f8faff] border ${error ? 'border-rose-200' : 'border-slate-100'} rounded-lg focus:ring-2 focus:ring-slate-200 outline-none transition-all font-medium text-slate-700`}
                placeholder="Enter email"
                required
              />
              {error && (
                <p className="text-rose-500 text-xs font-bold ml-1 animate-in fade-in duration-300">{error}</p>
              )}
            </div>

            <div className="text-right">
              <button type="button" className="text-[#3B82F6] text-sm font-bold hover:underline">
                Login with domain
              </button>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#2C3344] text-white py-4 rounded-lg font-black text-lg hover:bg-slate-700 transition-all shadow-xl shadow-slate-100 mt-2"
            >
              Login
            </button>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-3 py-3 px-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-all text-slate-600 font-bold text-sm">
                <i className="fas fa-lock text-slate-800"></i>
                OTP
              </button>
              <button type="button" className="flex items-center justify-center gap-3 py-3 px-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-all text-slate-600 font-bold text-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="w-4 h-4" />
                Microsoft
              </button>
            </div>

            <div className="text-center pt-2">
              <p className="text-sm text-slate-400 font-bold">
                Don't have an account yet ? <button onClick={() => onNavigate(AppView.SIGNUP)} className="text-[#3B82F6] hover:underline">Signup Here</button>
              </p>
            </div>

            <div className="relative pt-8 pb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-4 text-slate-400 font-bold uppercase tracking-widest text-center">Download our SisuniHRMS Mobile App</span>
              </div>
            </div>

            <div className="flex justify-center">
              <button type="button" className="flex items-center gap-3 py-2.5 px-6 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all text-slate-700 font-black text-sm">
                <i className="fas fa-download"></i>
                Download App
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
