
import React, { useState } from 'react';
import { AppView } from '../types';

interface PayrollProps {
  activeSubView: AppView;
}

const Payroll: React.FC<PayrollProps> = ({ activeSubView }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const [gratuityConfig] = useState({
    eligibilityYears: '5',
    daysPerYear: '15',
    workingDaysPerMonth: '26',
    maxTaxExempt: '20,00,000'
  });

  const recentRuns = [
    { id: 1, period: 'November', startedAt: 'Dec 2, 2022, 5:16:40 PM', timeTaken: '0.60 Sec', status: 'success' },
    { id: 2, period: 'September', startedAt: 'Dec 2, 2022, 4:30:35 PM', timeTaken: '1 Sec', status: 'success' },
    { id: 3, period: 'October', startedAt: 'Nov 23, 2022, 4:38:25 PM', timeTaken: '1 Sec', status: 'success' },
  ];

  const generatedPayslips = [
    { id: 'RD011', name: 'Thilogan C', dept: 'Engineering', gross: '45,000', deduction: '2,145', net: '42,855', status: 'Generated' },
    { id: 'RD012', name: 'Divya Raj', dept: 'HR', gross: '35,000', deduction: '1,850', net: '33,150', status: 'Emailed' },
    { id: 'RD014', name: 'Praveen Jr', dept: 'IT Support', gross: '28,000', deduction: '1,200', net: '26,800', status: 'Generated' },
    { id: 'RD015', name: 'Gibson S', dept: 'Engineering', gross: '55,000', deduction: '4,200', net: '50,800', status: 'Paid' },
    { id: 'RD016', name: 'Sowndarya R', dept: 'Quality', gross: '32,000', deduction: '1,400', net: '30,600', status: 'Generated' },
  ];

  const employeeBonusData = [
    { id: 'RD011', name: 'Thilogan C', dept: 'Engineering', basic: '18,500', computed: '1,541', exGratia: '500', total: '2,041', status: 'Pending' },
    { id: 'RD012', name: 'Divya Raj', dept: 'HR', basic: '15,000', computed: '1,249', exGratia: '250', total: '1,499', status: 'Approved' },
  ];

  const gratuityList = [
    { id: 'RD001', name: 'Alex Rivera', joinDate: '2018-05-10', tenure: '6.1 Yrs', basic: '45,000', accrued: '1,59,230', status: 'Eligible' },
    { id: 'RD010', name: 'Marcus Wright', joinDate: '2019-08-15', tenure: '4.8 Yrs', basic: '28,000', accrued: '77,538', status: 'Grace Period' },
  ];

  const labelStyles = "block text-[13px] font-bold text-slate-400 mb-1";
  const inputStyles = "w-full border-b border-white/20 py-2 bg-transparent focus:outline-none focus:border-blue-500 transition-colors text-sm text-slate-300 placeholder:text-slate-600 mb-6 appearance-none";

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResults(true);
    }, 1500);
  };

  const renderPeriods = () => (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 animate-in fade-in duration-500">
      <div className="xl:col-span-2 space-y-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-black text-white tracking-tight">Payroll Cycle 2024</h3>
          <button className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition-all">Add New Cycle</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, idx) => {
            const isClosed = idx < 4;
            const isActive = idx === 4;
            return (
              <div key={month} className={`p-6 rounded-2xl border ${isActive ? 'bg-blue-600/10 border-blue-500/50 shadow-lg shadow-blue-500/10' : 'bg-[#1A1A1A] border-white/5'} transition-all group cursor-pointer hover:border-white/20`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className={`text-lg font-black ${isActive ? 'text-white' : 'text-slate-300'}`}>{month} 2024</h4>
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Monthly Cycle</p>
                  </div>
                  {isClosed ? <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-black px-2 py-0.5 rounded border border-emerald-500/20">CLOSED</span> : isActive ? <span className="bg-blue-500 text-white text-[10px] font-black px-2 py-0.5 rounded animate-pulse">ACTIVE</span> : <span className="bg-slate-500/10 text-slate-500 text-[10px] font-black px-2 py-0.5 rounded border border-white/5">UPCOMING</span>}
                </div>
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
                  <div className="flex items-center gap-2"><i className="fas fa-users-viewfinder"></i> 142 Employees</div>
                  <div className="flex items-center gap-2"><i className="fas fa-clock"></i> Ends in 12 days</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="space-y-12">
        <div className="bg-[#1A1A1A] rounded-2xl p-10 border border-white/5 shadow-2xl relative">
          <h3 className="text-xl font-black text-white mb-10 tracking-tight">Select Bonus Options</h3>
          <div className="space-y-6">
            <div className="space-y-1">
              <label className={labelStyles}>Location *</label>
              <select className={inputStyles}><option>All Location</option></select>
            </div>
            <div className="space-y-1"><label className={labelStyles}>Bonus Rate *</label><input type="text" className={inputStyles} defaultValue="11.33" /></div>
            <div className="space-y-1"><label className={labelStyles}>Minimum Bonus *</label><input type="text" className={inputStyles} defaultValue="100" /></div>
            <div className="flex items-center justify-between pt-8 border-t border-white/5">
               <button className="text-rose-500 text-[13px] font-black hover:text-rose-400 uppercase tracking-widest transition-colors">Delete</button>
               <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-black text-xs transition-all shadow-xl shadow-blue-500/10 uppercase tracking-widest">Save Config</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRunPayroll = () => (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="bg-[#1A1A1A] rounded-2xl p-10 border border-white/5 flex flex-col items-center justify-center text-center shadow-2xl">
          <p className="text-slate-400 text-[12px] font-black uppercase tracking-[0.2em] mb-4">Active Period</p>
          <h3 className="text-4xl font-black text-white mb-8">6 Month</h3>
          <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-12 py-3.5 rounded-xl font-black text-sm flex items-center gap-3 transition-all">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"><i className="fas fa-play text-[10px]"></i></div>
            Start
          </button>
          <p className="mt-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">CLICK ABOVE TO START PAYROLL PROCESSING</p>
          <div className="w-full h-1 bg-slate-800 rounded-full mt-10 overflow-hidden"><div className="w-1/3 h-full bg-blue-500/40"></div></div>
        </div>
        <div className="space-y-6">
          <h4 className="font-black text-white text-lg tracking-tight">Before Running Payroll</h4>
          <ul className="space-y-4 text-[13px] font-semibold text-slate-500">
            <li>Employees Who Have Joined In This Period Are Added</li>
            <li>Employees who have Left In This Period Are Marked With Exit Date</li>
            <li>Attendance Is Marked For All Employees</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5">
        <table className="w-full text-left">
          <thead className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] border-b border-white/5">
            <tr><th className="px-8 py-5">Periods</th><th className="px-8 py-5">Started At</th><th className="px-8 py-5">Time Taken</th><th className="px-8 py-5 text-center">Result</th></tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {recentRuns.map((run) => (
              <tr key={run.id} className="hover:bg-white/[0.02] transition-colors group"><td className="px-8 py-5 text-sm font-black text-slate-400">{run.period}</td><td className="px-8 py-5 text-sm text-slate-500">{run.startedAt}</td><td className="px-8 py-5 text-sm text-slate-500">{run.timeTaken}</td><td className="px-8 py-5 text-center"><i className="fas fa-circle-check text-emerald-500/40"></i></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderPaySlip = () => (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Param Selection Panel */}
        <div className="lg:col-span-1 bg-[#1A1A1A] p-10 rounded-2xl border border-white/5 shadow-2xl space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl font-black text-white">Generation Parameters</h3>
            <p className="text-slate-500 font-bold text-[12px]">Filter to generate specific slips.</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className={labelStyles}>Period *</label>
              <select className={inputStyles}>
                <option>November 2022</option>
                <option>October 2022</option>
                <option>September 2022</option>
              </select>
            </div>
            <div>
              <label className={labelStyles}>Template *</label>
              <select className={inputStyles}>
                <option>Standard Corporate Slip</option>
                <option>Compact Summary</option>
              </select>
            </div>
            <div>
              <label className={labelStyles}>Location</label>
              <select className={inputStyles}><option>All Locations</option></select>
            </div>
            <div>
              <label className={labelStyles}>Department</label>
              <select className={inputStyles}><option>All Departments</option></select>
            </div>
            <div>
              <label className={labelStyles}>Employee</label>
              <select className={inputStyles}><option>Select Employee (Optional)</option></select>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-[#2563EB] hover:bg-blue-700 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-500/10 transition-all flex items-center justify-center gap-3"
            >
              {isGenerating ? (
                <>
                  <i className="fas fa-circle-notch animate-spin"></i>
                  Generating...
                </>
              ) : (
                <>
                  <i className="fas fa-file-invoice-dollar"></i>
                  Generate Payslips
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results / List Area */}
        <div className="lg:col-span-2 space-y-6">
          {!showResults && !isGenerating ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-20 bg-white/[0.01] border border-dashed border-white/10 rounded-2xl">
              <i className="fas fa-file-circle-question text-6xl opacity-10 mb-6 text-blue-500"></i>
              <h3 className="text-xl font-black text-white/40 uppercase tracking-widest">Awaiting Parameters</h3>
              <p className="text-slate-600 font-bold text-sm max-w-xs mt-2">Select the period and other options on the left to start generating employee payslips.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-xl font-black text-white">Generated Records</h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">November 2022 Cycle</p>
                </div>
                <div className="flex gap-3">
                  <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-[10px] font-black text-slate-400 hover:text-white transition-all uppercase flex items-center gap-2">
                    <i className="fas fa-envelope"></i>
                    Bulk Email
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-[10px] font-black hover:bg-blue-700 transition-all uppercase flex items-center gap-2">
                    <i className="fas fa-download"></i>
                    Zip Export
                  </button>
                </div>
              </div>

              <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
                <table className="w-full text-left">
                  <thead className="text-[10px] font-black text-slate-600 uppercase tracking-widest border-b border-white/5 bg-black/10">
                    <tr>
                      <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded bg-slate-800 border-white/10" /></th>
                      <th className="px-6 py-4">Employee</th>
                      <th className="px-6 py-4 text-right">Gross</th>
                      <th className="px-6 py-4 text-right">Deduction</th>
                      <th className="px-6 py-4 text-right">Net Pay</th>
                      <th className="px-6 py-4 text-center">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {generatedPayslips.map((slip) => (
                      <tr key={slip.id} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="px-6 py-4"><input type="checkbox" className="rounded bg-slate-800 border-white/10" /></td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-[13px] font-black text-slate-300">{slip.name}</span>
                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">{slip.id}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right text-[13px] font-bold text-slate-500">₹{slip.gross}</td>
                        <td className="px-6 py-4 text-right text-[13px] font-bold text-rose-500/60">₹{slip.deduction}</td>
                        <td className="px-6 py-4 text-right text-[13px] font-black text-blue-500">₹{slip.net}</td>
                        <td className="px-6 py-4 text-center">
                          <span className={`text-[9px] font-black px-2 py-0.5 rounded border ${
                            slip.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                            slip.status === 'Emailed' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                            'bg-slate-500/10 text-slate-400 border-white/5'
                          }`}>
                            {slip.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-3 opacity-40 group-hover:opacity-100 transition-opacity">
                            <button className="text-slate-400 hover:text-white transition-colors"><i className="fas fa-eye text-xs"></i></button>
                            <button className="text-slate-400 hover:text-white transition-colors"><i className="fas fa-file-pdf text-xs"></i></button>
                            <button className="text-slate-400 hover:text-blue-500 transition-colors"><i className="fas fa-paper-plane text-xs"></i></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/[0.02] rounded-xl border border-white/5">
                 <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500">
                    <span>Total Net Payout: <span className="text-white font-black ml-1">₹1,84,005</span></span>
                    <span className="w-px h-3 bg-white/10"></span>
                    <span>5 Records Selected</span>
                 </div>
                 <div className="flex gap-1">
                   <button className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-xs text-slate-500 hover:text-white transition-all"><i className="fas fa-chevron-left"></i></button>
                   <button className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-xs text-white transition-all">1</button>
                   <button className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-xs text-slate-500 hover:text-white transition-all"><i className="fas fa-chevron-right"></i></button>
                 </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  const renderUserPayslip = () => (
    <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 p-12 max-w-5xl mx-auto shadow-2xl animate-in fade-in duration-700">
      <div className="flex justify-between items-start mb-12">
        <div className="space-y-2"><h2 className="text-2xl font-black text-white">RapidData Technologies</h2></div>
        <div className="text-right">
          <h3 className="text-sm font-black text-slate-400 uppercase mb-2">SALARY SLIP FOR November 2022 (PROVISIONAL)</h3>
          <p className="text-[11px] font-bold text-slate-500">(Nov 1, 2022 - Nov 30, 2022)</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 mb-12">
        <div className="space-y-4">
          <h4 className="text-[11px] font-black text-blue-500 uppercase tracking-[0.2em] border-b border-white/5 pb-2">Employee Info</h4>
          <div className="grid grid-cols-2 gap-y-3 text-[13px]">
            <span className="text-slate-500 font-bold">Employee Name</span><span className="text-slate-300">Thilogan C</span>
            <span className="text-slate-500 font-bold">Employee Code</span><span className="text-slate-300">RapidData011</span>
          </div>
        </div>
      </div>
      <div className="bg-black/20 rounded-xl overflow-hidden mb-12">
        <table className="w-full text-left text-[13px]">
          <thead className="bg-white/5 font-black text-white">
            <tr><th className="px-6 py-4">Salary Components</th><th className="px-6 py-4 text-right">Earned</th><th className="px-6 py-4 text-right">Deductions</th></tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-slate-400 font-bold">
            <tr><td className="px-6 py-4">Total Salary</td><td className="px-6 py-4 text-right">45,000</td><td className="px-6 py-4 text-right">2,145</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderStatutoryBonus = () => (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Estimated Payout', value: '₹4.28L', color: 'text-blue-500', icon: 'fa-money-bill-wave' },
          { label: 'Eligible Employees', value: '124', color: 'text-white', icon: 'fa-user-check' },
          { label: 'Compliance Status', value: 'Verified', color: 'text-emerald-500', icon: 'fa-shield-check' },
          { label: 'Approval Status', value: 'Pending', color: 'text-amber-500', icon: 'fa-clock' },
        ].map((m, i) => (
          <div key={i} className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{m.label}</p>
              <h4 className={`text-xl font-black ${m.color}`}>{m.value}</h4>
            </div>
            <i className={`fas ${m.icon} text-slate-800 text-2xl`}></i>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/5 shadow-2xl">
            <h3 className="text-[16px] font-black text-white mb-8 tracking-tight uppercase border-b border-white/5 pb-4">Rule Configuration</h3>
            <div className="space-y-4">
              <div><label className={labelStyles}>Financial Year *</label><select className={inputStyles}><option>2023-24</option></select></div>
              <div><label className={labelStyles}>Bonus Percentage (%) *</label><input type="text" className={inputStyles} defaultValue="8.33" /></div>
              <div><label className={labelStyles}>Statutory Wage Limit *</label><input type="text" className={inputStyles} defaultValue="21000" /></div>
              <div className="pt-4"><button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all">Calculate Bonus</button></div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
            <table className="w-full text-left">
              <thead className="text-[10px] font-black text-slate-600 uppercase tracking-widest border-b border-white/5 bg-black/10">
                <tr><th className="px-6 py-4">Employee</th><th className="px-6 py-4">Department</th><th className="px-6 py-4 text-right">Computed</th><th className="px-6 py-4 text-center">Status</th></tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {employeeBonusData.map((emp) => (
                  <tr key={emp.id} className="hover:bg-white/[0.02] transition-colors"><td className="px-6 py-4"><span className="text-[13px] font-black text-slate-300">{emp.name}</span></td><td className="px-6 py-4 text-[12px] font-bold text-slate-500">{emp.dept}</td><td className="px-6 py-4 text-right text-[13px] font-black text-slate-400">₹{emp.computed}</td><td className="px-6 py-4 text-center"><span className="text-[9px] font-black px-2 py-0.5 rounded border border-blue-500/20 text-blue-500">{emp.status.toUpperCase()}</span></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGratuity = () => (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Provision', value: '₹18.42L', color: 'text-emerald-500', icon: 'fa-vault' },
          { label: 'Eligible Staff', value: '86', color: 'text-white', icon: 'fa-user-clock' },
          { label: 'Avg. Tenure', value: '6.4 Yrs', color: 'text-blue-500', icon: 'fa-hourglass-half' },
          { label: 'Exit Settlements', value: '3', color: 'text-rose-500', icon: 'fa-file-signature' },
        ].map((m, i) => (
          <div key={i} className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{m.label}</p>
              <h4 className={`text-xl font-black ${m.color}`}>{m.value}</h4>
            </div>
            <i className={`fas ${m.icon} text-slate-800 text-2xl`}></i>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/5 shadow-2xl">
            <h3 className="text-[16px] font-black text-white mb-8 tracking-tight uppercase border-b border-white/5 pb-4">Gratuity Policy</h3>
            <div className="space-y-4">
              <div><label className={labelStyles}>Minimum Service (Years) *</label><input type="text" className={inputStyles} defaultValue={gratuityConfig.eligibilityYears} /></div>
              <div><label className={labelStyles}>Gratuity Days (per Year) *</label><input type="text" className={inputStyles} defaultValue={gratuityConfig.daysPerYear} /></div>
              <div><label className={labelStyles}>Max Tax Exemption *</label><input type="text" className={inputStyles} defaultValue={gratuityConfig.maxTaxExempt} /></div>
              <div className="pt-4"><button className="w-full bg-[#3A3F70] hover:bg-[#4a4f80] text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl transition-all">Update Policy Rules</button></div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
            <table className="w-full text-left">
              <thead className="text-[10px] font-black text-slate-600 uppercase tracking-widest border-b border-white/5 bg-black/10">
                <tr><th className="px-6 py-4">Employee</th><th className="px-6 py-4">Tenure</th><th className="px-6 py-4 text-right">Provisioned</th><th className="px-6 py-4 text-center">Status</th></tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {gratuityList.map((emp) => (
                  <tr key={emp.id} className="hover:bg-white/[0.02] transition-colors"><td className="px-6 py-4"><span className="text-[13px] font-black text-slate-300">{emp.name}</span></td><td className="px-6 py-4 text-[12px] font-bold text-slate-500">{emp.tenure}</td><td className="px-6 py-4 text-right text-[13px] font-black text-blue-500">₹{emp.accrued}</td><td className="px-6 py-4 text-center"><span className={`text-[9px] font-black px-2 py-0.5 rounded border ${emp.status === 'Eligible' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}`}>{emp.status.toUpperCase()}</span></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const getTitle = () => {
    switch (activeSubView) {
      case AppView.PAYROLL_PERIODS: return 'Periods';
      case AppView.PAYROLL_RUN: return 'Run Payroll';
      case AppView.PAYROLL_SLIP: return 'Pay Slip';
      case AppView.PAYROLL_USER_SLIP: return 'User Payslip';
      case AppView.PAYROLL_BONUS: return 'Statutory Bonus';
      case AppView.PAYROLL_GRATUITY: return 'Gratuity';
      default: return 'Payroll';
    }
  };

  return (
    <div className="flex h-full bg-[#121212] min-h-screen text-slate-300 font-sans overflow-hidden -m-12">
      <div className="flex-1 overflow-y-auto p-16 relative custom-scrollbar">
        <header className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <i className="fas fa-chevron-left text-blue-500 cursor-pointer hover:text-blue-400 transition-colors"></i>
            <h2 className="text-2xl font-black text-white flex items-center gap-3 tracking-tight">
              {getTitle()}
              <i className="fas fa-star text-slate-700 text-sm cursor-pointer hover:text-amber-400 transition-colors"></i>
            </h2>
          </div>
        </header>

        <div className="relative z-10">
          {activeSubView === AppView.PAYROLL_PERIODS && renderPeriods()}
          {activeSubView === AppView.PAYROLL_RUN && renderRunPayroll()}
          {activeSubView === AppView.PAYROLL_SLIP && renderPaySlip()}
          {activeSubView === AppView.PAYROLL_USER_SLIP && renderUserPayslip()}
          {activeSubView === AppView.PAYROLL_BONUS && renderStatutoryBonus()}
          {activeSubView === AppView.PAYROLL_GRATUITY && renderGratuity()}
        </div>

        <button className="fixed bottom-10 right-10 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
           <i className="fas fa-wand-magic-sparkles"></i>
        </button>
      </div>
    </div>
  );
};

export default Payroll;
