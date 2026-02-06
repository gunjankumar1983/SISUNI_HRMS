
import React, { useState } from 'react';

interface HRTask {
  id: string;
  title: string;
  category: 'Onboarding' | 'Payroll' | 'Compliance' | 'Recruitment' | 'General';
  assignee: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'In Progress' | 'Completed';
}

const TaskManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const tasks: HRTask[] = [
    { id: 'TSK-101', title: 'Verify Document for Sowndarya R', category: 'Onboarding', assignee: 'Self', dueDate: '2024-05-25', priority: 'High', status: 'In Progress' },
    { id: 'TSK-102', title: 'Process November Statutory Bonus', category: 'Payroll', assignee: 'Self', dueDate: '2024-05-30', priority: 'High', status: 'Pending' },
    { id: 'TSK-103', title: 'Quarterly Compliance Audit', category: 'Compliance', assignee: 'Legal Team', dueDate: '2024-06-15', priority: 'Medium', status: 'Pending' },
    { id: 'TSK-104', title: 'Final Interview for QA Lead', category: 'Recruitment', assignee: 'CTO (Jeb)', dueDate: '2024-05-24', priority: 'High', status: 'In Progress' },
    { id: 'TSK-105', title: 'Update Company Holiday List', category: 'General', assignee: 'Divya Raj', dueDate: '2024-05-28', priority: 'Low', status: 'Completed' },
    { id: 'TSK-106', title: 'Collect Bank Details for Abul K', category: 'Onboarding', assignee: 'Self', dueDate: '2024-05-22', priority: 'Medium', status: 'Pending' },
  ];

  const filtered = tasks.filter(t => 
    t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { label: 'Active Tasks', value: '42', icon: 'fa-list-check', color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Overdue', value: '03', icon: 'fa-triangle-exclamation', color: 'text-rose-500', bg: 'bg-rose-50' },
    { label: 'Completed Today', value: '18', icon: 'fa-circle-check', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'Delegated', value: '12', icon: 'fa-users-gear', color: 'text-indigo-500', bg: 'bg-indigo-50' },
  ];

  const getPriorityColor = (p: string) => {
    switch(p) {
      case 'High': return 'text-rose-500 bg-rose-50 border-rose-100';
      case 'Medium': return 'text-amber-500 bg-amber-50 border-amber-100';
      case 'Low': return 'text-blue-500 bg-blue-50 border-blue-100';
      default: return 'text-slate-500 bg-slate-50 border-slate-100';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-[#2A2D53] tracking-tight flex items-center gap-3">
            Task Management
            <i className="fas fa-star text-amber-400 text-sm"></i>
          </h2>
          <p className="text-slate-400 font-semibold text-sm mt-1">Manage, assign and track HR administrative workflows.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
            <i className="fas fa-filter text-slate-300"></i>
            Advanced Filter
          </button>
          <button className="bg-[#3A3F70] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:bg-[#2D315A] transition-all flex items-center gap-2">
            <i className="fas fa-plus"></i>
            Create New Task
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-blue-100 transition-all cursor-default">
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

      {/* Main Content Area */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left: Task Creation / Quick Config */}
        <div className="xl:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] sticky top-8">
            <h3 className="text-lg font-black text-slate-800 mb-8 flex items-center gap-3">
              <i className="fas fa-bolt text-blue-500"></i>
              Quick Task Launcher
            </h3>
            
            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[12px] font-black text-slate-400 uppercase tracking-widest">Task Title *</label>
                <input type="text" placeholder="e.g. Verify payroll records" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium transition-all" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-black text-slate-400 uppercase tracking-widest">Assignee</label>
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium transition-all appearance-none">
                  <option>Assign to Myself</option>
                  <option>Divya Raj (HR)</option>
                  <option>Jeb Million (CTO)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-black text-slate-400 uppercase tracking-widest">Category</label>
                  <select className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-50 outline-none text-[13px] font-medium transition-all">
                    <option>Onboarding</option>
                    <option>Payroll</option>
                    <option>Compliance</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-black text-slate-400 uppercase tracking-widest">Priority</label>
                  <select className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-50 outline-none text-[13px] font-medium transition-all">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-[#3B82F6] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-500/10 hover:bg-blue-600 transition-all mt-4">
                Assign Task
              </button>
            </div>
          </div>
        </div>

        {/* Right: Task Table */}
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between gap-4">
              <div className="relative flex-1">
                <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-sm"></i>
                <input 
                  type="text" 
                  placeholder="Search tasks..." 
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button className="p-3 bg-slate-50 text-slate-400 hover:text-blue-500 rounded-xl transition-all"><i className="fas fa-list"></i></button>
                <button className="p-3 bg-slate-50 text-slate-400 hover:text-blue-500 rounded-xl transition-all"><i className="fas fa-grip"></i></button>
              </div>
            </div>

            <table className="w-full text-left">
              <thead className="bg-slate-50/50">
                <tr className="text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                  <th className="px-8 py-5">Task Details</th>
                  <th className="px-8 py-5 text-center">Due Date</th>
                  <th className="px-8 py-5 text-center">Priority</th>
                  <th className="px-8 py-5 text-center">Status</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filtered.map((task) => (
                  <tr key={task.id} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="text-[14px] font-bold text-slate-800">{task.title}</span>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-[11px] font-black text-slate-400 uppercase tracking-tighter">{task.id}</span>
                          <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                          <span className="text-[11px] font-black text-blue-500 uppercase tracking-widest">{task.category}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <span className={`text-[12px] font-bold ${new Date(task.dueDate) < new Date() ? 'text-rose-500' : 'text-slate-500'}`}>
                        {task.dueDate}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black border ${getPriorityColor(task.priority)} uppercase tracking-widest`}>
                        {task.priority}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-black tracking-wide border ${
                        task.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                        task.status === 'In Progress' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                        'bg-slate-50 text-slate-400 border-slate-100'
                      }`}>
                        {task.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-sm" title="Mark Complete">
                          <i className="fas fa-check text-xs"></i>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-slate-50 text-slate-400 hover:bg-slate-800 hover:text-white transition-all shadow-sm" title="Edit">
                          <i className="fas fa-edit text-xs"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filtered.length === 0 && (
              <div className="py-20 flex flex-col items-center justify-center text-slate-300">
                <i className="fas fa-clipboard-list text-6xl mb-4 opacity-10"></i>
                <p className="text-sm font-black uppercase tracking-widest">No tasks found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
