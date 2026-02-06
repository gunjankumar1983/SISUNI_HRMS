
import React, { useState } from 'react';
import { AppView } from '../types.ts';
import Logo from './Logo.tsx';

interface PublicHeaderProps {
  onNavigate: (view: AppView) => void;
}

const HR_MANAGEMENT_ITEMS = [
  { title: 'Core HR', desc: 'Empowering organizations with seamless management of their human capital.', icon: 'fa-users', color: 'text-blue-500', bg: 'bg-blue-50' },
  { title: 'Onboarding', desc: 'Navigating the path to seamless integration and success.', icon: 'fa-handshake', color: 'text-amber-500', bg: 'bg-amber-50' },
  { title: 'Attendance', desc: 'Tracking presence, empowering productivity.', icon: 'fa-clock', color: 'text-orange-500', bg: 'bg-orange-50' },
  { title: 'Payroll Management', desc: 'Efficiently streamline and automate your payroll processes with precision and reliability.', icon: 'fa-money-bill-transfer', color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { title: 'Recruitment', desc: 'Unlocking potential by connecting talent with opportunity.', icon: 'fa-user-plus', color: 'text-rose-500', bg: 'bg-rose-50' },
  { title: 'Leave Management', desc: 'Streamlining time off for a balanced and productive workforce.', icon: 'fa-calendar-alt', color: 'text-sky-500', bg: 'bg-sky-50' },
  { title: 'Performance', desc: 'Unleashing the full potential of speed and efficiency.', icon: 'fa-gauge-high', color: 'text-teal-500', bg: 'bg-teal-50' },
  { title: 'Travel Management', desc: 'Embrace the world, expand your horizons, and create unforgettable memories.', icon: 'fa-plane', color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { title: 'Task Management', desc: 'Efficiently organizing and prioritizing actions to maximize productivity.', icon: 'fa-list-check', color: 'text-green-500', bg: 'bg-green-50' },
  { title: 'Help & Support', desc: 'Guiding you towards solutions with expertise and empathy.', icon: 'fa-headset', color: 'text-pink-500', bg: 'bg-pink-50' },
];

const RECRUITMENT_ITEMS = [
  { title: 'Candidate Sourcing', desc: 'Find top talent faster and easier.', icon: 'fa-users-viewfinder', color: 'text-blue-500', bg: 'bg-white' },
  { title: 'Job Requisition Management', desc: 'Streamline job posting and approval workflows.', icon: 'fa-file-invoice', color: 'text-emerald-500', bg: 'bg-white' },
  { title: 'Candidate Management', icon: 'fa-user-check', desc: 'Organize and track candidates throughout the hiring process.', color: 'text-amber-500', bg: 'bg-white' },
  { title: 'Career page', desc: 'Attract top talent with a stunning and informative career page.', icon: 'fa-laptop-code', color: 'text-green-500', bg: 'bg-white' },
  { title: 'Pre-boarding', desc: 'Welcome new hires with a smooth and efficient onboarding experience.', icon: 'fa-handshake-angle', color: 'text-purple-500', bg: 'bg-white' },
  { title: 'Integrations', desc: 'Seamlessly connect with your existing tools and platforms for a unified hiring experience.', icon: 'fa-circle-nodes', color: 'text-emerald-400', bg: 'bg-white' },
  { title: 'AI Recommendations', desc: 'Leverage AI to match the best candidates to your roles.', icon: 'fa-brain', color: 'text-rose-500', bg: 'bg-white' },
  { title: 'Reports and Analytics', desc: 'Make data-driven hiring decisions with actionable insights.', icon: 'fa-chart-line', color: 'text-red-500', bg: 'bg-white' },
  { title: 'Surveys', desc: 'Gather valuable candidate feedback and improve your hiring process.', icon: 'fa-poll-h', color: 'text-sky-500', bg: 'bg-white' },
  { title: 'Support and Assistance', desc: 'Dedicated support to guide you through the process.', icon: 'fa-headset', color: 'text-rose-400', bg: 'bg-white' },
];

const RESOURCES_ITEMS = [
  { title: 'Downloads', desc: 'Desktop/Mobile Utility for Data Synchronization', icon: 'fa-download', color: 'text-rose-500', bg: 'bg-white' },
  { title: 'Case Studies', desc: 'Essential Documents and Policies Templates', icon: 'fa-file-pdf', color: 'text-sky-500', bg: 'bg-white' },
];

const ABOUT_ITEMS = [
  { title: 'Our Story', desc: 'Discover Our Journey and Values easier.', icon: 'fa-landmark', color: 'text-rose-500', bg: 'bg-white' },
  { title: 'Contact Us', desc: 'Reach Out for Support and Inquiries', icon: 'fa-envelope', color: 'text-blue-500', bg: 'bg-white' },
];

const PublicHeader: React.FC<PublicHeaderProps> = ({ onNavigate }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const renderDropdown = (items: any[], width = "w-[800px]", cols = "grid-cols-2", alignLeft = false) => (
    <div className={`absolute top-full ${alignLeft ? 'left-0' : 'left-[-150px]'} mt-2 ${width} bg-white shadow-2xl rounded-2xl border border-slate-100 p-8 animate-in fade-in slide-in-from-top-2 z-[110]`}>
      <div className={`grid ${cols} gap-x-12 gap-y-10`}>
        {items.map((item) => (
          <div key={item.title} className="flex gap-5 group/item cursor-pointer">
            <div className={`w-12 h-12 ${item.bg} border border-slate-100 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover/item:border-blue-100 transition-all`}>
              <i className={`fas ${item.icon} ${item.color} text-lg`}></i>
            </div>
            <div className="space-y-1">
              <h4 className="text-[15px] font-black text-slate-800 group-hover/item:text-blue-600 transition-colors">{item.title}</h4>
              <p className="text-[12px] text-slate-400 font-medium leading-tight">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-slate-50 px-6 py-3">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="cursor-pointer" onClick={() => onNavigate(AppView.LANDING)}>
            <Logo className="scale-90 origin-left" />
          </div>

          <nav className="hidden xl:flex items-center gap-8">
            {/* HR Management */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setActiveMenu('hr')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="flex items-center gap-1 text-[#212529] font-bold hover:text-blue-600 transition-colors text-[14px] cursor-pointer">
                HR Management
                <i className="fas fa-chevron-down text-[9px] opacity-50"></i>
              </div>
              {activeMenu === 'hr' && renderDropdown(HR_MANAGEMENT_ITEMS, "w-[900px]", "grid-cols-2")}
            </div>

            {/* Recruitment & Onboarding */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setActiveMenu('recruitment')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="flex items-center gap-1 text-[#212529] font-bold hover:text-blue-600 transition-colors text-[14px] cursor-pointer">
                Recruitment & Onboarding
                <i className="fas fa-chevron-down text-[9px] opacity-50"></i>
              </div>
              {activeMenu === 'recruitment' && renderDropdown(RECRUITMENT_ITEMS, "w-[1100px]", "grid-cols-3")}
            </div>

            {/* Resources */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setActiveMenu('resources')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="flex items-center gap-1 text-[#212529] font-bold hover:text-blue-600 transition-colors text-[14px] cursor-pointer">
                Resources
                <i className="fas fa-chevron-down text-[9px] opacity-50"></i>
              </div>
              {activeMenu === 'resources' && renderDropdown(RESOURCES_ITEMS, "w-[450px]", "grid-cols-1", true)}
            </div>

            <div onClick={() => onNavigate(AppView.PRICING)} className="text-[#212529] font-bold hover:text-blue-600 transition-colors text-[14px] cursor-pointer py-2">
              Pricing
            </div>

            {/* About */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setActiveMenu('about')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="flex items-center gap-1 text-[#212529] font-bold hover:text-blue-600 transition-colors text-[14px] cursor-pointer">
                About
                <i className="fas fa-chevron-down text-[9px] opacity-50"></i>
              </div>
              {activeMenu === 'about' && renderDropdown(ABOUT_ITEMS, "w-[450px]", "grid-cols-1", true)}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigate(AppView.LOGIN)}
            className="text-slate-800 font-bold px-4 py-2 hover:text-blue-600 transition-all text-[14px]"
          >
            Login
          </button>
          <button 
            onClick={() => onNavigate(AppView.SIGNUP)}
            className="bg-[#1DBF4F] text-white px-6 py-2.5 rounded-lg font-black hover:bg-[#19a343] transition-all shadow-md text-[14px]"
          >
            Start Free Trial
          </button>
          <button 
            onClick={() => onNavigate(AppView.DEMO)}
            className="bg-[#0D70D0] text-white px-6 py-2.5 rounded-lg font-black hover:bg-[#0b5eaf] transition-all shadow-md text-[14px]"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;
