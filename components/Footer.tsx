
import React from 'react';
import { AppView } from '../types.ts';
import Logo from './Logo.tsx';

interface FooterProps {
  onNavigate: (view: AppView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative mt-20">
      {/* CTA Section - Overlapping white box */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 -mb-20">
        <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-100">
          <div>
            <h2 className="text-4xl font-black text-[#0D253F] mb-2">Get Ready To Dive In!</h2>
            <p className="text-slate-500 font-bold">Get Early Access to SisuniHRMS Software</p>
          </div>
          <button 
            onClick={() => onNavigate(AppView.DEMO)}
            className="bg-[#1B213E] text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
          >
            Request Demo
          </button>
        </div>
      </div>

      {/* Main Dark Footer */}
      <div className="bg-[#0D1623] pt-40 pb-16 px-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Column 1: Brand & Desc */}
            <div className="lg:col-span-4 space-y-8">
              <Logo variant="light" />
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                SisuniHRMS is a product of SisuniData IT Solutions Pvt Ltd, India and is a leading system Integrator with many years of expertise in implementing solutions to various corporations across the world. We help our clients to fully digitize their operations, improve their KPIs and massively optimize their operational cost. Our belief in the values of trust, transparency, flexibility and value-centricity ensures the continued pursuit of our customers best interests.
              </p>
              
              <div className="space-y-4">
                <p className="text-[#FFB800] font-black uppercase tracking-widest text-sm">Connect with Us :</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-[#FF0000] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"><i className="fab fa-youtube"></i></a>
                  <a href="#" className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="w-10 h-10 bg-[#1DA1F2] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"><i className="fab fa-twitter"></i></a>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[#FFB800] font-black uppercase tracking-widest text-sm">Download App</p>
                <div className="flex gap-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10 cursor-pointer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Column 2: Home Links */}
            <div className="lg:col-span-2">
              <h3 className="text-[#3B82F6] font-black text-xl mb-8">Home</h3>
              <ul className="space-y-4">
                {['Overview', 'Careers', 'About Us', 'Contact Us', 'Terms & Conditions'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-slate-300 hover:text-white cursor-pointer transition-colors font-bold text-sm">
                    <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: HR Features */}
            <div className="lg:col-span-3">
              <h3 className="text-[#3B82F6] font-black text-xl mb-8">HR Features</h3>
              <ul className="grid grid-cols-1 gap-4">
                {[
                  'Core HR', 'Payroll Software', 'Leave Management', 
                  'Attendance Management', 'Performance Management', 
                  'Recruitment', 'Travel Management', 
                  'Task Management', 'Help & Support'
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-slate-300 hover:text-white cursor-pointer transition-colors font-bold text-sm">
                    <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Newsletter & Contact */}
            <div className="lg:col-span-3 space-y-10">
              <div className="space-y-6">
                <h3 className="text-[#3B82F6] font-black text-xl">Subscribe to Newsletter</h3>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Enter your organization email address" 
                    className="w-full bg-[#F8F9FA] text-slate-800 px-6 py-4 rounded-lg focus:outline-none font-medium text-sm"
                  />
                  <button className="w-40 bg-[#3B82F6] text-white py-3 rounded-lg font-black text-sm hover:bg-[#2563EB] transition-all shadow-lg shadow-blue-900/20">
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-[#FFB800] font-black text-xl uppercase tracking-wider">Sales</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[#3B82F6] bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <span className="text-slate-300 font-bold text-sm group-hover:text-white">sales@sisunidatatech.com</span>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[#3B82F6] bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <span className="text-slate-300 font-bold text-sm group-hover:text-white">+91-9487263288</span>
                  </div>
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[#3B82F6] bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors shrink-0">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <span className="text-slate-300 font-bold text-sm leading-relaxed group-hover:text-white">
                      no.45/b, subham complex, 1st a main 2nd floor, jp nagar 3rd phase, bangalore, karnataka, india, 560078
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
