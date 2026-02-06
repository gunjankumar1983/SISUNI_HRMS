
import React, { useState } from 'react';

interface Candidate {
  firstName: string;
  lastName: string;
  mail: string;
  onboardingStatus: 'InProgress' | 'Complete';
  triggerMail: 'Pending' | 'Completed';
  migration: boolean;
}

const CandidateManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const candidates: Candidate[] = [
    { firstName: 'Sowndarya', lastName: 'R', mail: 'Sowndarya@gmail.com', onboardingStatus: 'InProgress', triggerMail: 'Pending', migration: true },
    { firstName: 'ABUL', lastName: 'K', mail: 'Abul@gmail.com', onboardingStatus: 'InProgress', triggerMail: 'Pending', migration: true },
    { firstName: 'Test23', lastName: '', mail: 'Test@gmail.com', onboardingStatus: 'Complete', triggerMail: 'Completed', migration: true },
    { firstName: 'Praveen', lastName: 'Jr', mail: 'Praveen@gmail.com', onboardingStatus: 'InProgress', triggerMail: 'Pending', migration: true },
    { firstName: 'Test23', lastName: '', mail: 'test123@gmail.com', onboardingStatus: 'Complete', triggerMail: 'Completed', migration: true },
    { firstName: 'Praveen', lastName: 'Jr', mail: 'praveenkumar.bs1199@gmail.com', onboardingStatus: 'InProgress', triggerMail: 'Pending', migration: true },
  ];

  const filtered = candidates.filter(c => 
    c.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.mail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="text-blue-600 hover:bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center transition-all">
            <i className="fas fa-chevron-left text-sm"></i>
          </button>
          <h2 className="text-[18px] font-bold text-[#2A2D53] flex items-center gap-2">
            Candidate Details
            <i className="fas fa-star text-slate-300 text-sm cursor-pointer hover:text-amber-400"></i>
          </h2>
        </div>
        
        <button className="bg-white border border-slate-200 text-slate-700 px-6 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-50 transition-all">
          Add Candidate
        </button>
      </div>

      <div className="relative">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-sm"></i>
        <input 
          type="text" 
          placeholder="Search Candidate Name, Mail" 
          className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-50 outline-none text-sm font-medium transition-all placeholder:text-slate-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-2xl border border-slate-50 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#F8F9FD]">
            <tr className="text-[12px] font-bold text-[#2A2D53] uppercase tracking-wider">
              <th className="px-8 py-6">First Name</th>
              <th className="px-8 py-6">Last Name</th>
              <th className="px-8 py-6">Mail</th>
              <th className="px-8 py-6 text-center">Onboarding Status</th>
              <th className="px-8 py-6 text-center">Trigger Mail</th>
              <th className="px-8 py-6 text-center">Migration</th>
              <th className="px-8 py-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filtered.map((can, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-5 text-[14px] font-medium text-slate-600">{can.firstName}</td>
                <td className="px-8 py-5 text-[14px] font-medium text-slate-600">{can.lastName}</td>
                <td className="px-8 py-5 text-[14px] font-medium text-slate-600">{can.mail}</td>
                <td className="px-8 py-5 text-center">
                  <span className={`text-[13px] font-bold ${can.onboardingStatus === 'Complete' ? 'text-emerald-500' : 'text-slate-400'}`}>
                    {can.onboardingStatus}
                  </span>
                </td>
                <td className="px-8 py-5 text-center">
                   {can.triggerMail === 'Completed' ? (
                     <span className="text-[13px] font-bold text-slate-400">Completed</span>
                   ) : (
                    <button className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center mx-auto hover:bg-blue-100 transition-all">
                      <i className="fas fa-envelope-circle-check"></i>
                    </button>
                   )}
                </td>
                <td className="px-8 py-5 text-center">
                  <button className="w-8 h-8 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center mx-auto hover:bg-slate-100 transition-all">
                    <i className="fas fa-user-gear"></i>
                  </button>
                </td>
                <td className="px-8 py-5 text-center">
                  <div className="flex items-center justify-center gap-4">
                    <button className="text-blue-400 hover:text-blue-600 transition-colors">
                      <i className="far fa-edit"></i>
                    </button>
                    <button className="text-rose-300 hover:text-rose-500 transition-colors">
                      <i className="far fa-trash-can"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination placeholder */}
        <div className="px-8 py-6 flex items-center justify-end gap-8 border-t border-slate-50">
          <div className="flex items-center gap-3 text-sm text-slate-400 font-medium">
             Items per page:
             <select className="bg-transparent border-b border-slate-200 outline-none text-slate-600 px-1">
               <option>10</option>
             </select>
          </div>
          <div className="text-sm text-slate-400 font-medium">
             1 - 4 of 4
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-300 hover:text-slate-600 disabled:opacity-30" disabled><i className="fas fa-chevron-left"></i></button>
            <button className="text-slate-300 hover:text-slate-600 disabled:opacity-30" disabled><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateManagement;
