
import React, { useState } from 'react';

interface SupportTicket {
  id: string;
  subject: string;
  category: 'Payroll' | 'Policy' | 'IT & Asset' | 'Facilities' | 'General';
  employee: string;
  avatar: string;
  createdDate: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Open' | 'In Progress' | 'Resolved';
}

const HelpDesk: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Open' | 'In Progress' | 'Resolved'>('All');

  const tickets: SupportTicket[] = [
    { id: 'TIC-901', subject: 'Tax deduction query for May month', category: 'Payroll', employee: 'Gibson S', avatar: 'https://i.pravatar.cc/150?u=gibson', createdDate: '2024-05-24', priority: 'High', status: 'Open' },
    { id: 'TIC-902', subject: 'Clarification on new remote work policy', category: 'Policy', employee: 'Sowndarya R', avatar: 'https://i.pravatar.cc/150?u=sowndarya', createdDate: '2024-05-23', priority: 'Medium', status: 'In Progress' },
    { id: 'TIC-903', subject: 'Laptop battery replacement request', category: 'IT & Asset', employee: 'Gokul', avatar: 'https://i.pravatar.cc/150?u=gokul', createdDate: '2024-05-22', priority: 'High', status: 'Open' },
    { id: 'TIC-904', subject: 'Access card not working at lobby', category: 'Facilities', employee: 'Divya Rajendran', avatar: 'https://i.pravatar.cc/150?u=divya', createdDate: '2024-05-21', priority: 'Low', status: 'Resolved' },
    { id: 'TIC-905', subject: 'Request for experience certificate copy', category: 'General', employee: 'Evanjeline Oswald', avatar: 'https://i.pravatar.cc/150?u=evanjeline', createdDate: '2024-05-20', priority: 'Medium', status: 'Resolved' },
    { id: 'TIC-906', subject: 'PF withdrawal process help', category: 'Payroll', employee: 'Hariharan R', avatar: 'https://i.pravatar.cc/150?u=hari', createdDate: '2024-05-24', priority: 'High', status: 'Open' },
  ];

  const filteredTickets = tickets.filter(t => 
    (activeFilter === 'All' || t.status === activeFilter) &&
    (t.subject.toLowerCase().includes(searchTerm.toLowerCase()) || t.employee.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const metrics = [
    { label: 'Total Tickets', value: '152', icon: 'fa-headset', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Open Issues', value: '14', icon: 'fa-envelope-open', color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'Avg Resolution', value: '4.2h', icon: 'fa-bolt', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'SLA Met', value: '98%', icon: 'fa-shield-check', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  const getPriorityStyle = (priority: string) => {
    switch(priority) {
      case 'High': return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'Medium': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'Low': return 'bg-blue-50 text-blue-600 border-blue-100';
      default: return 'bg-slate-50 text-slate-400 border-slate-100';
    }
  };

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'Open': return 'bg-rose-500 text-white shadow-sm shadow-rose-200';
      case 'In Progress': return 'bg-blue-500 text-white shadow-sm shadow-blue-200';
      case 'Resolved': return 'bg-emerald-500 text-white shadow-sm shadow-emerald-200';
      default: return 'bg-slate-400 text-white';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700 max-w-[1400px] mx-auto pb-12">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-black text-[#2A2D53] tracking-tight flex items-center gap-3">
            HR Help Desk
            <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest">Live Support</span>
          </h2>
          <p className="text-slate-400 font-semibold text-sm mt-1">Resolve employee queries and manage support documentation.</p>
        </div>
        
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
            <i className="fas fa-file-export opacity-50"></i>
            Export Report
          </button>
          <button className="bg-[#3A3F70] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:bg-[#2D315A] transition-all flex items-center gap-2">
            <i className="fas fa-plus"></i>
            New Ticket
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-5 group hover:border-blue-100 transition-all cursor-default">
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

      {/* Main Support Panel */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden">
        {/* Table Controls */}
        <div className="p-8 border-b border-slate-50 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            {['All', 'Open', 'In Progress', 'Resolved'].map((f) => (
              <button 
                key={f}
                onClick={() => setActiveFilter(f as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all shrink-0 border ${
                  activeFilter === f ? 'bg-[#3A3F70] text-white border-[#3A3F70]' : 'bg-slate-50 text-slate-400 border-slate-100 hover:bg-slate-100'
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
                placeholder="Search ticket subject or employee..." 
                className="pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium transition-all min-w-[300px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="p-3 bg-slate-50 text-slate-400 hover:text-blue-500 rounded-xl transition-all border border-slate-100">
              <i className="fas fa-filter"></i>
            </button>
          </div>
        </div>

        {/* Support Tickets Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                <th className="px-8 py-5">Ticket ID & Subject</th>
                <th className="px-8 py-5">Employee</th>
                <th className="px-8 py-5 text-center">Category</th>
                <th className="px-8 py-5 text-center">Priority</th>
                <th className="px-8 py-5 text-center">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black text-blue-500 uppercase tracking-widest mb-1">{ticket.id}</span>
                      <span className="text-[14px] font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors cursor-pointer">{ticket.subject}</span>
                      <span className="text-[11px] font-medium text-slate-400 mt-1 flex items-center gap-2">
                        <i className="far fa-clock"></i>
                        Raised on {ticket.createdDate}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <img src={ticket.avatar} alt="" className="w-8 h-8 rounded-full border border-slate-100" />
                      <span className="text-[13px] font-bold text-slate-700">{ticket.employee}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest border border-slate-200">
                      {ticket.category}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black border uppercase tracking-widest ${getPriorityStyle(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <div className="flex justify-center">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${getStatusStyle(ticket.status)}`}>
                        {ticket.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                      <button className="w-9 h-9 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm" title="Reply to employee">
                        <i className="fas fa-reply text-xs"></i>
                      </button>
                      <button className="w-9 h-9 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-sm" title="Mark as Resolved">
                        <i className="fas fa-check text-xs"></i>
                      </button>
                      <button className="w-9 h-9 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all" title="More Actions">
                        <i className="fas fa-ellipsis-v text-xs"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredTickets.length === 0 && (
            <div className="py-24 flex flex-col items-center justify-center text-slate-300">
              <i className="fas fa-headset text-6xl mb-4 opacity-10"></i>
              <p className="text-sm font-black uppercase tracking-widest">No support tickets found</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-8 py-6 bg-slate-50/50 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-t border-slate-50">
           <div className="flex items-center gap-6">
              <span>Displaying {filteredTickets.length} of {tickets.length} Total Tickets</span>
              <span className="w-1 h-1 bg-slate-200 rounded-full hidden md:block"></span>
              <span className="text-blue-500">Live Connection Secured</span>
           </div>
           <div className="flex gap-2">
              <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl hover:text-blue-600 transition-all font-black">Previous</button>
              <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl hover:text-blue-600 transition-all font-black">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
