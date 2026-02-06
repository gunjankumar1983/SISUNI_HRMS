
import React, { useState } from 'react';

interface MailCandidate {
  id: string;
  name: string;
  email: string;
  role: string;
  package: string;
  sentDate: string;
  linkStatus: 'Active' | 'Expired' | 'Pending';
  progress: number; // 0 to 100
  reminders: number;
}

const MailOnboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const candidates: MailCandidate[] = [
    { id: 'ONB-001', name: 'Sowndarya R', email: 'sowndarya.r@gmail.com', role: 'Software Engineer', package: 'Standard IT', sentDate: '2024-05-15', linkStatus: 'Active', progress: 65, reminders: 0 },
    { id: 'ONB-002', name: 'Abul K', email: 'abul.k@outlook.com', role: 'Product Manager', package: 'Management', sentDate: '2024-05-14', linkStatus: 'Active', progress: 10, reminders: 1 },
    { id: 'ONB-003', name: 'Praveen Jr', email: 'praveen.jr@gmail.com', role: 'QA Lead', package: 'Standard IT', sentDate: '2024-05-10', linkStatus: 'Expired', progress: 0, reminders: 2 },
    { id: 'ONB-004', name: 'Divya Raj', email: 'divya.raj@hr.com', role: 'HR Executive', package: 'Operations', sentDate: '2024-05-16', linkStatus: 'Pending', progress: 0, reminders: 0 },
    { id: 'ONB-005', name: 'Marcus Wright', email: 'marcus.w@tech.com', role: 'DevOps Engineer', package: 'Standard IT', sentDate: '2024-05-12', linkStatus: 'Active', progress: 90, reminders: 0 },
  ];

  const filtered = candidates.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const metrics = [
    { label: 'Invitations Sent', value: '142', icon: 'fa-paper-plane', color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Active Links', value: '38', icon: 'fa-link', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'Avg. Login Time', value: '4.2h', icon: 'fa-clock-rotate-left', color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { label: 'Expired Links', value: '12', icon: 'fa-link-slash', color: 'text-rose-500', bg: 'bg-rose-50' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700 max-w-[1400px] mx-auto">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button className="text-blue-600 hover:bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center transition-all">
            <i className="fas fa-chevron-left text-sm"></i>
          </button>
          <div>
            <h2 className="text-xl font-bold text-[#2A2D53] flex items-center gap-2">
              Mail Onboarding Management
              <i className="fas fa-star text-slate-300 text-sm cursor-pointer hover:text-amber-400"></i>
            </h2>
            <p className="text-xs font-semibold text-slate-400 mt-0.5">Track and trigger onboarding portal access</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
            <i className="fas fa-envelope-open-text opacity-50"></i>
            Edit Templates
          </button>
          <button className="bg-[#3A3F70] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:bg-[#2D315A] transition-all flex items-center gap-2">
            <i className="fas fa-plus"></i>
            New Batch Trigger
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-blue-100 transition-all">
            <div className={`w-14 h-14 ${m.bg} ${m.color} rounded-2xl flex items-center justify-center text-xl shadow-sm transition-transform group-hover:scale-110`}>
              <i className={`fas ${m.icon}`}></i>
            </div>
            <div>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">{m.label}</p>
              <h4 className="text-2xl font-black text-slate-800">{m.value}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-sm"></i>
          <input 
            type="text" 
            placeholder="Search Candidate Name, Email..." 
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium transition-all placeholder:text-slate-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <select className="bg-white border border-slate-100 px-4 py-4 rounded-2xl text-sm font-bold text-slate-600 outline-none focus:ring-4 focus:ring-blue-50 transition-all min-w-[160px]">
            <option>All Packages</option>
            <option>Standard IT</option>
            <option>Management</option>
          </select>
          <select className="bg-white border border-slate-100 px-4 py-4 rounded-2xl text-sm font-bold text-slate-600 outline-none focus:ring-4 focus:ring-blue-50 transition-all min-w-[160px]">
            <option>Link Status</option>
            <option>Active</option>
            <option>Expired</option>
          </select>
        </div>
      </div>

      {/* Candidates Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50">
            <tr className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] border-b border-slate-100">
              <th className="px-8 py-6">Candidate Information</th>
              <th className="px-8 py-6">Package / Role</th>
              <th className="px-8 py-6 text-center">Invitation Date</th>
              <th className="px-8 py-6 text-center">Status</th>
              <th className="px-8 py-6">Onboarding Progress</th>
              <th className="px-8 py-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filtered.map((can) => (
              <tr key={can.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-8 py-5">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-slate-800">{can.name}</span>
                    <span className="text-[12px] font-medium text-slate-400">{can.email}</span>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-slate-600">{can.package}</span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter opacity-60">{can.role}</span>
                  </div>
                </td>
                <td className="px-8 py-5 text-center">
                  <span className="text-[13px] font-bold text-slate-500">{can.sentDate}</span>
                  {can.reminders > 0 && (
                    <div className="text-[9px] font-black text-amber-500 uppercase mt-1">
                      <i className="fas fa-bell mr-1"></i>
                      {can.reminders} Reminders Sent
                    </div>
                  )}
                </td>
                <td className="px-8 py-5 text-center">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-wide border ${
                    can.linkStatus === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                    can.linkStatus === 'Expired' ? 'bg-rose-50 text-rose-600 border-rose-100' :
                    'bg-slate-50 text-slate-400 border-slate-100'
                  }`}>
                    LINK {can.linkStatus.toUpperCase()}
                  </span>
                </td>
                <td className="px-8 py-5 min-w-[200px]">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-[11px] font-bold">
                      <span className="text-slate-400">Step 3 of 5</span>
                      <span className="text-blue-600">{can.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 transition-all duration-1000" 
                        style={{ width: `${can.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5 text-right">
                  <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm" title="Resend Link">
                      <i className="fas fa-rotate"></i>
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all shadow-sm" title="View Progress">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all shadow-sm" title="Revoke Access">
                      <i className="fas fa-ban"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="py-24 flex flex-col items-center justify-center text-slate-400">
            <i className="fas fa-envelope-circle-check text-6xl mb-4 opacity-10"></i>
            <p className="text-lg font-bold">No candidate mailings match your criteria.</p>
          </div>
        )}

        {/* Footer info */}
        <div className="px-8 py-6 bg-slate-50/30 border-t border-slate-100 flex items-center justify-between">
           <p className="text-xs font-bold text-slate-400">Showing {filtered.length} of {candidates.length} active onboarding sessions</p>
           <div className="flex gap-2">
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-500 hover:text-blue-600 transition-all">Previous</button>
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-500 hover:text-blue-600 transition-all">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MailOnboard;
