
import React from 'react';
import { MOCK_EMPLOYEES } from '../constants';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Employees', value: MOCK_EMPLOYEES.length, icon: 'fa-users', color: 'bg-blue-500' },
    { label: 'Present Today', value: '42', icon: 'fa-check-circle', color: 'bg-emerald-500' },
    { label: 'On Leave', value: '3', icon: 'fa-calendar-day', color: 'bg-amber-500' },
    { label: 'Open Positions', value: '12', icon: 'fa-briefcase', color: 'bg-indigo-500' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Organizational Health</h2>
          <p className="text-slate-500 mt-1">SisuniHRMS Management dashboard.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center gap-2">
          <i className="fas fa-plus"></i>
          Hire Employee
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-slate-200`}>
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <span className="text-emerald-500 text-sm font-semibold">+4.2%</span>
            </div>
            <h3 className="text-slate-500 font-medium text-sm uppercase tracking-wider">{stat.label}</h3>
            <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-800">Attendance Trends</h3>
            <select className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-3 py-1 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center text-slate-400 bg-slate-50/50">
            <div className="text-center">
              <i className="fas fa-chart-line text-4xl mb-2 opacity-20"></i>
              <p>Visualization Area (Sisuni Analytics)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="font-bold text-slate-800 mb-6">Upcoming Holidays</h3>
          <div className="space-y-6">
            {[
              { name: 'Memorial Day', date: 'May 27, 2024', type: 'Public' },
              { name: 'Juneteenth', date: 'June 19, 2024', type: 'Restricted' },
              { name: 'Independence Day', date: 'July 04, 2024', type: 'Public' }
            ].map((h, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-50 rounded-lg flex flex-col items-center justify-center text-rose-600 font-bold text-xs shrink-0">
                  <span>{h.date.split(' ')[0].substring(0,3).toUpperCase()}</span>
                  <span className="text-lg leading-tight">{h.date.split(' ')[1].replace(',','')}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{h.name}</h4>
                  <span className="text-xs text-slate-500 uppercase">{h.type} Holiday</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-all text-sm">
            View Holiday Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
