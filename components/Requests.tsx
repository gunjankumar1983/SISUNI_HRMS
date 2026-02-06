
import React, { useState } from 'react';
import { MOCK_EMPLOYEES } from '../constants';

interface HRRequest {
  id: string;
  employeeName: string;
  avatar: string;
  type: 'Leave' | 'Attendance' | 'Expense' | 'Letter' | 'Asset';
  title: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  priority: 'High' | 'Normal';
  details: string;
}

const Requests: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Approvals' | 'My Requests'>('Approvals');
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Approved' | 'Rejected'>('All');

  const requests: HRRequest[] = [
    { id: 'REQ-501', employeeName: 'Divya Rajendran', avatar: 'https://i.pravatar.cc/150?u=divya', type: 'Leave', title: 'Casual Leave (2 Days)', date: '2024-05-24', status: 'Pending', priority: 'High', details: 'Personal family emergency in native.' },
    { id: 'REQ-502', employeeName: 'Gibson S', avatar: 'https://i.pravatar.cc/150?u=gibson', type: 'Attendance', title: 'Punch Correction', date: '2024-05-20', status: 'Pending', priority: 'Normal', details: 'Internet outage prevented checkout at 6 PM.' },
    { id: 'REQ-503', employeeName: 'Sowndarya R', avatar: 'https://i.pravatar.cc/150?u=sowndarya', type: 'Expense', title: 'Client Lunch Reimbursement', date: '2024-05-21', status: 'Approved', priority: 'Normal', details: 'Lunch with Nexus Partners team.' },
    { id: 'REQ-504', employeeName: 'Gokul', avatar: 'https://i.pravatar.cc/150?u=gokul', type: 'Asset', title: 'New Keyboard Request', date: '2024-05-22', status: 'Pending', priority: 'Normal', details: 'Existing mechanical keyboard stopped functioning.' },
    { id: 'REQ-505', employeeName: 'Hariharan R', avatar: 'https://i.pravatar.cc/150?u=hari', type: 'Leave', title: 'Sick Leave', date: '2024-05-18', status: 'Rejected', priority: 'High', details: 'Fever and cold. Doctor suggested 3 days rest.' },
    { id: 'REQ-506', employeeName: 'Evanjeline Oswald', avatar: 'https://i.pravatar.cc/150?u=evanjeline', type: 'Letter', title: 'Experience Certificate', date: '2024-05-19', status: 'Approved', priority: 'Normal', details: 'Needed for higher education application.' },
  ];

  const filtered = requests.filter(r => 
    (filter === 'All' || r.status === filter)
  );

  const stats = [
    { label: 'Pending Approval', value: '11', icon: 'fa-hourglass-half', color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Actioned Today', value: '08', icon: 'fa-check-double', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'Leave Balance (Avg)', value: '14.5', icon: 'fa-calendar-day', color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { label: 'Avg. Response Time', value: '2.4h', icon: 'fa-bolt', color: 'text-blue-500', bg: 'bg-blue-50' },
  ];

  const getTypeStyle = (type: string) => {
    switch(type) {
      case 'Leave': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'Attendance': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'Expense': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Letter': return 'bg-blue-50 text-blue-600 border-blue-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-black text-[#2A2D53] tracking-tight flex items-center gap-3">
            Unified Requests Hub
            <span className="text-[11px] font-black bg-rose-500 text-white px-2 py-0.5 rounded-full uppercase tracking-widest">11 Action Items</span>
          </h2>
          <p className="text-slate-400 font-semibold text-sm mt-1">Manage employee applications and administrative approvals.</p>
        </div>
        
        <div className="flex bg-slate-100 p-1.5 rounded-2xl shadow-inner">
          <button 
            onClick={() => setActiveTab('Approvals')}
            className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all ${activeTab === 'Approvals' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Approvals
          </button>
          <button 
            onClick={() => setActiveTab('My Requests')}
            className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all ${activeTab === 'My Requests' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            My Requests
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-5 group hover:border-blue-100 transition-all cursor-default">
            <div className={`w-14 h-14 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center text-xl shadow-sm transition-transform group-hover:scale-110`}>
              <i className={`fas ${s.icon}`}></i>
            </div>
            <div>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">{s.label}</p>
              <h4 className="text-2xl font-black text-slate-800">{s.value}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden">
        {/* Table Controls */}
        <div className="p-8 border-b border-slate-50 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            {['All', 'Pending', 'Approved', 'Rejected'].map((f) => (
              <button 
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all shrink-0 border ${
                  filter === f ? 'bg-[#3A3F70] text-white border-[#3A3F70]' : 'bg-slate-50 text-slate-400 border-slate-100 hover:bg-slate-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-sm"></i>
              <input 
                type="text" 
                placeholder="Search requests..." 
                className="pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium transition-all"
              />
            </div>
            <button className="p-3 bg-slate-50 text-slate-400 hover:text-blue-500 rounded-xl transition-all border border-slate-100">
              <i className="fas fa-filter"></i>
            </button>
          </div>
        </div>

        {/* Requests Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                <th className="px-8 py-5">Employee & Request</th>
                <th className="px-8 py-5 text-center">Category</th>
                <th className="px-8 py-5 text-center">Submitted Date</th>
                <th className="px-8 py-5 text-center">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((req) => (
                <tr key={req.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <img src={req.avatar} alt="" className="w-10 h-10 rounded-full object-cover border-2 border-slate-100" />
                      <div>
                        <h4 className="text-[14px] font-bold text-slate-800">{req.employeeName}</h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${req.priority === 'High' ? 'bg-rose-500 animate-pulse' : 'bg-slate-300'}`}></span>
                          <span className="text-[13px] font-medium text-slate-500">{req.title}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black border uppercase tracking-widest ${getTypeStyle(req.type)}`}>
                      {req.type}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <span className="text-[13px] font-bold text-slate-500">{req.date}</span>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <div className="flex items-center justify-center gap-2">
                       <span className={`px-2.5 py-1 rounded-full text-[10px] font-black tracking-wide border ${
                        req.status === 'Approved' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                        req.status === 'Rejected' ? 'bg-rose-50 text-rose-600 border-rose-100' :
                        'bg-amber-50 text-amber-600 border-amber-100'
                      }`}>
                        {req.status.toUpperCase()}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                      {req.status === 'Pending' ? (
                        <>
                          <button className="w-9 h-9 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-sm" title="Approve">
                            <i className="fas fa-check text-xs"></i>
                          </button>
                          <button className="w-9 h-9 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all shadow-sm" title="Reject">
                            <i className="fas fa-xmark text-xs"></i>
                          </button>
                        </>
                      ) : (
                        <button className="w-9 h-9 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all" title="View Details">
                          <i className="fas fa-eye text-xs"></i>
                        </button>
                      )}
                      <button className="w-9 h-9 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center hover:bg-slate-100 transition-all">
                        <i className="fas fa-ellipsis-v text-[10px]"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="py-24 flex flex-col items-center justify-center text-slate-300">
              <i className="fas fa-inbox text-6xl mb-4 opacity-10"></i>
              <p className="text-sm font-black uppercase tracking-widest">No matching requests found</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-8 py-6 bg-slate-50/50 flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-slate-400">
           <div className="flex items-center gap-6">
              <span>Showing 1-6 of {requests.length} Requests</span>
              <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
              <span className="text-blue-500">Auto-refresh active</span>
           </div>
           <div className="flex gap-2">
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl hover:text-blue-600 transition-all">Prev</button>
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl hover:text-blue-600 transition-all">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
