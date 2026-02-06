
import React from 'react';

const TravelManagement: React.FC = () => {
  const inputStyles = "w-full border-b border-slate-300 py-3 bg-transparent focus:outline-none focus:border-blue-600 transition-colors text-[14px] text-slate-700 placeholder:text-slate-400";
  const labelStyles = "block text-[13px] font-medium text-slate-500 mb-1";
  
  return (
    <div className="max-w-6xl mx-auto animate-in fade-in duration-700">
      {/* Add Travel Expense Section */}
      <div className="mb-12">
        <h2 className="text-[18px] font-bold text-blue-800 mb-6">Add Travel Expense</h2>
        
        <div className="bg-slate-50/50 border border-slate-100 rounded-lg p-10 relative">
          <div className="absolute top-4 left-4 border-l-4 border-blue-500 h-10"></div>
          
          <h3 className="text-[15px] font-bold text-slate-800 mb-8 ml-2">Expense 1</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            <div className="space-y-1">
              <label className={labelStyles}>Travel Id *</label>
              <select className={inputStyles}>
                <option value="">Select Travel ID</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Description *</label>
              <input type="text" className={inputStyles} placeholder="Enter description" />
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Date *</label>
              <div className="relative">
                <input type="date" className={inputStyles} />
                <i className="far fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
              </div>
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Upload PNG,JPEG,PDF,DOCX... *</label>
              <div className="relative">
                <input type="text" className={inputStyles} placeholder="Click to upload" readOnly />
                <i className="fas fa-paperclip absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
              </div>
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Lodging *</label>
              <input type="text" className={inputStyles} />
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Boarding *</label>
              <input type="text" className={inputStyles} />
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Local Conveyance *</label>
              <input type="text" className={inputStyles} />
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Incidentals *</label>
              <input type="text" className={inputStyles} />
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Others *</label>
              <input type="text" className={inputStyles} />
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Currency *</label>
              <select className={inputStyles}>
                <option value="">Select Currency</option>
                <option value="INR">INR</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Add Travel Request Section */}
      <div className="mt-16">
        <div className="flex items-center gap-3 mb-8">
          <i className="fas fa-chevron-left text-blue-600 text-sm"></i>
          <h2 className="text-[18px] font-bold text-blue-800">Add Travel Request</h2>
        </div>
        
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="space-y-1">
              <label className={labelStyles}>Client Name *</label>
              <input type="text" className={inputStyles} />
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Place Of Visit *</label>
              <input type="text" className={inputStyles} />
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Purpose Of Visit *</label>
              <input type="text" className={inputStyles} />
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Expected Date Of Departure *</label>
              <div className="relative">
                <input type="date" className={inputStyles} />
                <i className="far fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
              </div>
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Expected Date Of Arrival *</label>
              <div className="relative">
                <input type="date" className={inputStyles} />
                <i className="far fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
              </div>
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Is Billable To Customer Name *</label>
              <select className={inputStyles}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Mode Of Travel *</label>
              <select className={inputStyles}>
                <option value="">Select Mode</option>
                <option value="flight">Flight</option>
                <option value="train">Train</option>
                <option value="bus">Bus</option>
                <option value="taxi">Taxi</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label className={labelStyles}>Class Of Travel *</label>
              <select className={inputStyles}>
                <option value="">Select Class</option>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end pt-4">
            <button 
              type="button" 
              className="bg-[#0D1B3E] text-white px-12 py-3 rounded-md font-bold text-sm tracking-wide hover:bg-slate-800 transition-all shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TravelManagement;
