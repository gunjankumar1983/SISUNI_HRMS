
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark', withText = true }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* The "S" Logo stylized as per screenshot */}
      <div className="relative w-10 h-10 flex items-center justify-center">
         <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="s-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path 
              d="M30 20C20 20 15 30 15 40C15 50 25 55 50 60C75 65 85 70 85 80C85 90 75 100 60 100C45 100 30 90 30 80M70 80C80 80 85 70 85 60C85 50 75 45 50 40C25 35 15 30 15 20C15 10 25 0 40 0C55 0 70 10 70 20"
              fill="none"
              stroke="url(#s-grad)"
              strokeWidth="15"
              strokeLinecap="round"
            />
         </svg>
      </div>
      {withText && (
        <div className="flex flex-col leading-tight">
          <span className={`text-xl font-black ${variant === 'dark' ? 'text-slate-900' : 'text-white'}`}>
            Sisuni<span className="text-[#3B82F6]">HRMS</span>
          </span>
          <span className={`text-[10px] font-bold tracking-widest uppercase ${variant === 'dark' ? 'text-slate-400' : 'text-slate-300'}`}>
            Management
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
