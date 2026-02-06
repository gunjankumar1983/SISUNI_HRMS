
import React, { useState } from 'react';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate, onLogout }) => {
  const [onboardingOpen, setOnboardingOpen] = useState(
    currentView === AppView.CANDIDATE || currentView === AppView.MAIL_ONBOARD
  );
  
  const [payrollOpen, setPayrollOpen] = useState(
    [
      AppView.PAYROLL_PERIODS,
      AppView.PAYROLL_RUN,
      AppView.PAYROLL_SLIP,
      AppView.PAYROLL_USER_SLIP,
      AppView.PAYROLL_BONUS,
      AppView.PAYROLL_GRATUITY
    ].includes(currentView)
  );

  const navItems = [
    { view: AppView.REQUESTS, label: 'Requests', icon: 'fa-arrows-left-right', badge: 11 },
    { view: AppView.DIRECTORY, label: 'Directory', icon: 'fa-address-card' },
    { view: AppView.AI_INSIGHTS, label: 'HR Dashboard', icon: 'fa-desktop' },
    { view: AppView.DATA_CAPTURE, label: 'Data Capture', icon: 'fa-pen-to-square' },
    { view: AppView.TRAVEL_MANAGEMENT, label: 'Travel Management', icon: 'fa-plane' },
    { view: AppView.TASK_MANAGEMENT, label: 'Task Management', icon: 'fa-copy' },
  ];

  return (
    <div className="w-72 h-full bg-white border-r border-slate-100 flex flex-col fixed left-0 top-0 z-50 transition-all duration-300">
      <div className="p-6 pb-2">
        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">MENU</div>
        
        <div className="flex items-center gap-2 mb-8 text-[13px] text-slate-400 font-medium">
          <span>Click</span>
          <i className="fas fa-star text-amber-400"></i>
          <span>to Favourites</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
        {/* Core Nav */}
        <button
          onClick={() => onNavigate(AppView.DASHBOARD)}
          className={`w-full flex items-center px-6 py-4 rounded-xl transition-all group ${
            currentView === AppView.DASHBOARD ? 'text-blue-600 font-bold bg-slate-50' : 'text-slate-500 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center gap-5">
            <i className={`fas fa-house text-lg w-6 ${currentView === AppView.DASHBOARD ? 'text-blue-600' : 'text-slate-400'}`}></i>
            <span className="text-[15px]">Home</span>
          </div>
        </button>

        <button
          onClick={() => onNavigate(AppView.ATTENDANCE)}
          className={`w-full flex items-center px-6 py-4 rounded-xl transition-all group ${
            currentView === AppView.ATTENDANCE ? 'text-blue-600 font-bold bg-slate-50' : 'text-slate-500 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center gap-5">
            <i className={`fas fa-calendar-days text-lg w-6 ${currentView === AppView.ATTENDANCE ? 'text-blue-600' : 'text-slate-400'}`}></i>
            <span className="text-[15px]">Attendance</span>
          </div>
        </button>

        {/* Collapsible Onboarding */}
        <div className="space-y-1">
          <button
            onClick={() => setOnboardingOpen(!onboardingOpen)}
            className={`w-full flex items-center justify-between px-6 py-4 rounded-xl transition-all group ${
              onboardingOpen ? 'text-blue-600 font-bold' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-5">
              <i className={`fas fa-user-group text-lg w-6 ${onboardingOpen ? 'text-blue-600' : 'text-slate-400'}`}></i>
              <span className="text-[15px]">Onboarding</span>
            </div>
            <i className={`fas fa-chevron-${onboardingOpen ? 'down' : 'right'} text-[10px] opacity-40`}></i>
          </button>
          
          {onboardingOpen && (
            <div className="ml-10 space-y-1">
              <button
                onClick={() => onNavigate(AppView.CANDIDATE)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all text-[15px] ${
                  currentView === AppView.CANDIDATE ? 'bg-[#3A3F70] text-white font-bold' : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                Candidate
              </button>
              <button
                onClick={() => onNavigate(AppView.MAIL_ONBOARD)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all text-[15px] ${
                  currentView === AppView.MAIL_ONBOARD ? 'bg-[#3A3F70] text-white font-bold' : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                Mail Onboard
              </button>
            </div>
          )}
        </div>

        {/* Reports Label Area */}
        <div className="px-6 py-4 mt-6">
          <div className="inline-block border border-slate-200 px-3 py-1 text-[11px] font-medium text-slate-500 rounded">
            dashboardreports
          </div>
        </div>

        {navItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onNavigate(item.view)}
            className={`w-full flex items-center justify-between px-6 py-4 rounded-xl transition-all group ${
              currentView === item.view ? 'bg-slate-50 text-blue-600 font-bold shadow-sm' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-5">
              <i className={`fas ${item.icon} text-lg w-6 ${currentView === item.view ? 'text-blue-600' : 'text-slate-400'}`}></i>
              <span className="text-[15px]">{item.label}</span>
            </div>
            {item.badge && (
              <span className="w-6 h-6 bg-rose-500 text-white text-[11px] flex items-center justify-center rounded-full font-bold">
                {item.badge}
              </span>
            )}
          </button>
        ))}

        {/* Collapsible Payroll - The Specific Request */}
        <div className="space-y-1">
          <button
            onClick={() => setPayrollOpen(!payrollOpen)}
            className={`w-full flex items-center justify-between px-6 py-4 rounded-xl transition-all group ${
              payrollOpen ? 'text-blue-600 font-bold' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-5">
              <i className={`fas fa-money-bill-transfer text-lg w-6 ${payrollOpen ? 'text-blue-600' : 'text-slate-400'}`}></i>
              <span className="text-[15px]">Payroll</span>
            </div>
            <i className={`fas fa-chevron-${payrollOpen ? 'down' : 'right'} text-[10px] opacity-40`}></i>
          </button>
          
          {payrollOpen && (
            <div className="ml-10 space-y-1">
              {[
                { view: AppView.PAYROLL_PERIODS, label: 'Periods' },
                { view: AppView.PAYROLL_RUN, label: 'Run Payroll' },
                { view: AppView.PAYROLL_SLIP, label: 'Pay Slip' },
                { view: AppView.PAYROLL_USER_SLIP, label: 'User Payslip' },
                { view: AppView.PAYROLL_BONUS, label: 'Statutory Bonus' },
                { view: AppView.PAYROLL_GRATUITY, label: 'Gratuity' }
              ].map((sub) => (
                <button
                  key={sub.view}
                  onClick={() => onNavigate(sub.view)}
                  className={`w-full text-left px-6 py-4 rounded-xl transition-all text-[15px] ${
                    currentView === sub.view 
                      ? 'bg-[#3A3F70] text-white font-bold shadow-md' 
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => onNavigate(AppView.HELP_DESK)}
          className={`w-full flex items-center px-6 py-4 rounded-xl transition-all group ${
            currentView === AppView.HELP_DESK ? 'text-blue-600 font-bold bg-slate-50' : 'text-slate-500 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center gap-5">
            <i className={`fas fa-headset text-lg w-6 ${currentView === AppView.HELP_DESK ? 'text-blue-600' : 'text-slate-400'}`}></i>
            <span className="text-[15px]">Hr Help Desk</span>
          </div>
        </button>
      </nav>

      <div className="p-6 border-t border-slate-50">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-4 px-6 py-4 rounded-xl text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-all font-medium"
        >
          <i className="fas fa-arrow-right-from-bracket text-lg"></i>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;