
import React from 'react';

const PreBoarding: React.FC = () => {
  const steps = [
    { label: 'Start', count: 102, active: false },
    { label: 'Collect Info', count: 12, active: false },
    { label: 'Verify Info', count: 65, active: true },
    { label: 'Release Offer', count: 10, active: false },
    { label: 'Offer Accept', count: 10, active: false },
    { label: 'Hired', count: 10, active: false },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Pre-boarding</h2>
        
        <div className="flex items-center w-full">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 flex items-center relative group">
              <div className={`flex flex-col items-center justify-center py-6 px-4 w-full rounded-lg transition-all ${
                step.active ? 'bg-[#0D70D0] text-white' : 'bg-slate-50 text-slate-400'
              } ${idx !== 0 ? '-ml-2' : ''} relative z-10`}
              style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%)' }}>
                <span className="text-sm font-bold uppercase tracking-wider mb-1">{step.label}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${
                  step.active ? 'bg-white text-[#0D70D0]' : 'bg-slate-200 text-slate-500'
                }`}>{step.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-slate-800">Welcome, Alexander Graham Bell</h3>
            <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
              <button className="px-3 py-1 bg-white text-[#0D70D0] text-xs font-bold rounded shadow-sm">Active</button>
              <button className="px-3 py-1 text-slate-400 text-xs font-bold rounded">Inactive</button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-xs text-slate-400 uppercase tracking-widest border-b border-slate-100">
                <tr>
                  <th className="pb-4">Job Title</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Applied On</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                  <td className="py-4 font-bold text-slate-700">Software Developer</td>
                  <td className="py-4">
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black">INTERVIEW</span>
                  </td>
                  <td className="py-4 text-slate-500">21-Jun-2024</td>
                  <td className="py-4">
                    <button className="text-slate-300 hover:text-slate-600"><i className="fas fa-ellipsis-v"></i></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
             <i className="fas fa-calendar-alt text-[#0D70D0]"></i>
             My Schedule Events
          </h3>
          <div className="flex gap-6 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-20 h-24 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col overflow-hidden text-center">
              <div className="bg-blue-500 text-white text-[10px] py-1 font-bold uppercase">May</div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-3xl font-black text-slate-800">30</div>
                <div className="text-[10px] text-slate-400 font-bold">Monday</div>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-black text-slate-900 text-lg mb-2">Software Developer</h4>
              <div className="space-y-1 text-sm text-slate-500 font-medium">
                <p><span className="w-20 inline-block font-bold">Date</span> May 30, 2024</p>
                <p><span className="w-20 inline-block font-bold">Time</span> 12:30 PM - 1:30 PM</p>
                <p><span className="w-20 inline-block font-bold">Link</span> <span className="text-[#0D70D0] cursor-pointer hover:underline">Click To Join</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreBoarding;
