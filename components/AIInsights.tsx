
import React, { useState, useEffect } from 'react';
import { MOCK_EMPLOYEES } from '../constants';

const AIInsights: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a quick data load for the dashboard
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const topMetrics = [
    { label: 'Total Headcount', value: '142', growth: '+12%', icon: 'fa-users', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'New Hires (30d)', value: '18', growth: '+5%', icon: 'fa-user-plus', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Attrition Rate', value: '2.4%', growth: '-0.5%', icon: 'fa-user-minus', color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'Gender Diversity', value: '48%', growth: 'Balanced', icon: 'fa-venus-mars', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  const announcements = [
    { title: 'New Remote Work Policy', date: '2 hours ago', tag: 'Policy' },
    { title: 'Annual Gala Night 2024', date: '1 day ago', tag: 'Event' },
    { title: 'Q3 Performance Reviews', date: '3 days ago', tag: 'Ops' },
  ];

  const milestones = [
    { name: 'Sowndarya R', event: 'Birthday', date: 'Today', icon: 'fa-cake-candles', color: 'text-pink-500' },
    { name: 'Gibson S', event: '2yr Anniversary', date: 'Tomorrow', icon: 'fa-award', color: 'text-amber-500' },
    { name: 'Divya Raj', event: 'Birthday', date: '25 May', icon: 'fa-cake-candles', color: 'text-pink-500' },
  ];

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] space-y-6">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-slate-100 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-chart-line text-blue-600 text-xl animate-pulse"></i>
          </div>
        </div>
        <div className="text-center space-y-2">
          <p className="text-slate-800 font-black text-xl tracking-tight">HR Intelligence Hub</p>
          <p className="text-slate-400 font-bold text-sm">Aggregating organizational health and workforce trends...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-1000 max-w-[1400px] mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-[#2A2D53] tracking-tight flex items-center gap-3">
            HR Strategy Dashboard
            <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest">Live</span>
          </h2>
          <p className="text-slate-400 font-semibold text-sm mt-1">Holistic view of your workforce and operational metrics.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
            <i className="fas fa-download text-slate-300"></i>
            Export PDF
          </button>
          <button className="bg-[#3A3F70] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:bg-[#2D315A] transition-all flex items-center gap-2">
            <i className="fas fa-arrows-rotate"></i>
            Refresh Analysis
          </button>
        </div>
      </div>

      {/* Top Level Command Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topMetrics.map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between group hover:border-blue-100 transition-all cursor-default">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${m.bg} ${m.color} rounded-2xl flex items-center justify-center text-lg shadow-sm transition-transform group-hover:scale-110`}>
                <i className={`fas ${m.icon}`}></i>
              </div>
              <span className={`text-[11px] font-black px-2 py-1 rounded-lg ${m.growth.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : m.growth.startsWith('-') ? 'bg-rose-50 text-rose-600' : 'bg-slate-50 text-slate-500'}`}>
                {m.growth}
              </span>
            </div>
            <div>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">{m.label}</p>
              <h4 className="text-3xl font-black text-slate-800">{m.value}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Main Row */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Col: Analytics Charts */}
        <div className="xl:col-span-8 space-y-8">
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                <i className="fas fa-chart-simple text-blue-500"></i>
                Departmental Distribution
              </h3>
              <select className="bg-slate-50 border-none text-[11px] font-black uppercase tracking-widest text-slate-400 rounded-lg px-3 py-2 outline-none">
                <option>Active Headcount</option>
                <option>Budget Utilization</option>
              </select>
            </div>
            
            <div className="space-y-6">
              {[
                { dept: 'Engineering', count: 62, color: 'bg-blue-500', pct: 85 },
                { dept: 'Marketing & Sales', count: 24, color: 'bg-indigo-500', pct: 45 },
                { dept: 'Human Resources', count: 12, color: 'bg-rose-500', pct: 25 },
                { dept: 'Operations', count: 44, color: 'bg-amber-500', pct: 65 },
              ].map((d, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-slate-700">{d.dept}</span>
                    <span className="text-slate-400">{d.count} Members</span>
                  </div>
                  <div className="w-full h-3 bg-slate-50 rounded-full overflow-hidden">
                    <div className={`h-full ${d.color} rounded-full transition-all duration-1000`} style={{ width: `${d.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
               <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                 <i className="fas fa-bullhorn text-rose-500"></i>
                 Announcements
               </h3>
               <div className="space-y-5">
                 {announcements.map((a, i) => (
                   <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                      <div>
                        <h4 className="text-[14px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{a.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{a.date}</span>
                          <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                          <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{a.tag}</span>
                        </div>
                      </div>
                   </div>
                 ))}
               </div>
               <button className="w-full mt-8 py-3 border border-slate-100 rounded-2xl text-[12px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-50 transition-all">
                 View All News
               </button>
             </div>

             <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
               <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                 <i className="fas fa-cake-candles text-pink-500"></i>
                 Upcoming Milestones
               </h3>
               <div className="space-y-6">
                 {milestones.map((m, i) => (
                   <div key={i} className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center ${m.color}`}>
                          <i className={`fas ${m.icon}`}></i>
                        </div>
                        <div>
                          <h4 className="text-[14px] font-bold text-slate-700">{m.name}</h4>
                          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{m.event}</p>
                        </div>
                      </div>
                      <span className="text-[12px] font-black text-slate-400 group-hover:text-slate-800 transition-colors">{m.date}</span>
                   </div>
                 ))}
               </div>
               <button className="w-full mt-8 py-3 border border-slate-100 rounded-2xl text-[12px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-50 transition-all">
                 Full Calendar
               </button>
             </div>
          </div>
        </div>

        {/* Right Col: Strategic Panel */}
        <div className="xl:col-span-4 space-y-8">
          {/* Recruitment Pipeline Card */}
          <div className="bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <i className="fas fa-user-plus"></i>
                </div>
                <h3 className="text-xl font-black text-slate-800 tracking-tight">Recruitment Pipeline</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-black text-blue-600">12</p>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-1">Open Roles</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-700">Engineering: 8</p>
                    <p className="text-sm font-bold text-slate-700">Sales: 4</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-black text-emerald-600">42</p>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-1">Interviews Scheduled</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-700">This Week: 15</p>
                    <p className="text-sm font-bold text-slate-700">Today: 3</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                 <div className="flex items-center justify-between text-sm font-bold">
                    <span className="text-slate-500">Avg. Time to Hire</span>
                    <span className="text-slate-800">18 Days</span>
                 </div>
                 <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[75%] rounded-full"></div>
                 </div>
                 <p className="text-[11px] font-black text-emerald-500 uppercase tracking-widest">-2.4% faster than last month</p>
              </div>
            </div>

            <button className="w-full bg-[#0D1B3E] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-slate-800 transition-all mt-8">
              Manage Vacancies
            </button>
          </div>

          {/* Quick Stats Card */}
          <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl p-8 text-white shadow-xl">
             <h4 className="text-lg font-black mb-4">Retention Index</h4>
             <div className="flex items-end gap-3">
               <span className="text-4xl font-black">96.8%</span>
               <span className="text-blue-100 text-xs font-bold mb-1.5">+0.4% from Q1</span>
             </div>
             <p className="text-blue-100 text-sm mt-4 font-medium leading-relaxed opacity-90">
               Your organization maintains a healthy retention rate compared to the industry average of 88%.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
