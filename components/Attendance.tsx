
import React, { useState } from 'react';
import { MOCK_ATTENDANCE } from '../constants';

const Attendance: React.FC = () => {
  const [checkedIn, setCheckedIn] = useState(false);
  const [timer, setTimer] = useState('00:00:00');

  const handleToggle = () => {
    setCheckedIn(!checkedIn);
    if (!checkedIn) {
      // Start fake timer logic would go here
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
          <div className={`w-32 h-32 rounded-full border-4 ${checkedIn ? 'border-emerald-500' : 'border-slate-200'} flex items-center justify-center mb-6 relative`}>
            {checkedIn && <div className="absolute inset-0 rounded-full border-4 border-emerald-500 animate-ping opacity-25"></div>}
            <div className="text-3xl font-mono font-bold text-slate-800">
              {checkedIn ? '09:42' : '--:--'}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{checkedIn ? 'You are Clocked In' : 'Ready to Work?'}</h3>
          <p className="text-slate-500 mb-8 max-w-xs">Record your presence for today. Don't forget to clock out before leaving.</p>
          <button 
            onClick={handleToggle}
            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all shadow-lg ${
              checkedIn 
                ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200'
            }`}
          >
            {checkedIn ? 'Clock Out' : 'Clock In Now'}
          </button>
        </div>

        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-900">Recent Logs</h3>
            <button className="text-indigo-600 text-sm font-semibold hover:underline">View History</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 text-left font-medium">Date</th>
                  <th className="px-6 py-4 text-left font-medium">Check In</th>
                  <th className="px-6 py-4 text-left font-medium">Check Out</th>
                  <th className="px-6 py-4 text-left font-medium">Total Hours</th>
                  <th className="px-6 py-4 text-left font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_ATTENDANCE.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{new Date(log.date).toDateString()}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{log.checkIn}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{log.checkOut || '--'}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-mono">08:45 hrs</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        log.status === 'present' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                      }`}>
                        {log.status.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
