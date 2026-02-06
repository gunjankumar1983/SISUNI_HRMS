
import React, { useState } from 'react';
import { MOCK_EMPLOYEES } from '../constants';

const EmployeeDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = MOCK_EMPLOYEES.filter(emp => 
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-[1400px] mx-auto">
      {/* Page Header Area */}
      <div className="flex items-center gap-3 mb-4">
        <button className="text-blue-600 hover:bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center transition-all">
          <i className="fas fa-chevron-left text-sm"></i>
        </button>
        <h2 className="text-xl font-bold text-[#2A2D53] flex items-center gap-2">
          Employee Directory
          <i className="fas fa-star text-slate-400 text-sm cursor-pointer hover:text-amber-400"></i>
        </h2>
      </div>

      {/* Breadcrumb/Label style */}
      <div className="flex justify-center mb-6">
        <div className="bg-white border border-slate-200 px-4 py-1 text-[11px] font-semibold text-slate-500 rounded">
          employee-directory
        </div>
      </div>

      {/* Search Input Area */}
      <div className="relative mb-8">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
        <input 
          type="text" 
          placeholder="Search Employee ID, Name, Office Email"
          className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none text-sm font-medium transition-all shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Employee Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((emp) => (
          <div key={emp.id} className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="p-6 relative">
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg text-[10px] font-black tracking-wide flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Active
                </span>
              </div>

              {/* Avatar and Name Section */}
              <div className="flex flex-col items-start gap-4 mb-4">
                <div className="relative">
                  <img src={emp.avatar} alt={emp.name} className="w-20 h-20 rounded-full object-cover border-4 border-slate-50" />
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-bold text-[16px] text-slate-800">{emp.name}</h3>
                  <p className="text-slate-400 text-[13px] font-semibold">{emp.role}</p>
                  <p className="text-slate-400 text-[11px] font-bold mt-1 uppercase tracking-tight">{emp.employeeId}</p>
                </div>
              </div>

              {/* Contact Info Section */}
              <div className="space-y-4 pt-4 border-t border-slate-50 mt-4">
                <div className="flex items-center justify-between group/line">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <i className="far fa-envelope text-slate-400 text-xs shrink-0"></i>
                    <span className="text-slate-400 text-[12px] font-medium truncate">{emp.email}</span>
                  </div>
                  <button className="text-slate-300 hover:text-blue-500 p-1 rounded-md hover:bg-blue-50 transition-all opacity-0 group-hover/line:opacity-100">
                    <i className="far fa-copy text-xs"></i>
                  </button>
                </div>

                <div className="flex items-center justify-between group/line">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-phone text-slate-400 text-xs shrink-0"></i>
                    <span className="text-slate-400 text-[12px] font-medium">{emp.phone}</span>
                  </div>
                  <button className="text-slate-300 hover:text-blue-500 p-1 rounded-md hover:bg-blue-50 transition-all opacity-0 group-hover/line:opacity-100">
                    <i className="far fa-copy text-xs"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* View Button Footer */}
            <button className="w-full py-3.5 border-t border-slate-50 text-[13px] font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all text-center mt-auto bg-white">
              View
            </button>
          </div>
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-slate-400">
          <i className="fas fa-user-slash text-6xl mb-4 opacity-20"></i>
          <p className="text-lg font-bold">No employees found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeDirectory;
