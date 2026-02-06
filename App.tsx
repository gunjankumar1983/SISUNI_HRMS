
import React, { useState, useEffect } from 'react';
import { AppView, User } from './types.ts';
import { MOCK_USER } from './constants.tsx';
import Sidebar from './components/Sidebar.tsx';
import Dashboard from './components/Dashboard.tsx';
import EmployeeDirectory from './components/EmployeeDirectory.tsx';
import AIInsights from './components/AIInsights.tsx';
import Attendance from './components/Attendance.tsx';
import Payroll from './components/Payroll.tsx';
import LandingPage from './components/LandingPage.tsx';
import PublicHeader from './components/PublicHeader.tsx';
import PreBoarding from './components/PreBoarding.tsx';
import SignUp from './components/SignUp.tsx';
import RequestDemo from './components/RequestDemo.tsx';
import Login from './components/Login.tsx';
import Pricing from './components/Pricing.tsx';
import TravelManagement from './components/TravelManagement.tsx';
import CandidateManagement from './components/CandidateManagement.tsx';
import MailOnboard from './components/MailOnboard.tsx';
import TaskManagement from './components/TaskManagement.tsx';
import Requests from './components/Requests.tsx';
import HelpDesk from './components/HelpDesk.tsx';
import { chatWithHRBot } from './services/geminiService.ts';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);
  const [user, setUser] = useState<User | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isBotThinking, setIsBotThinking] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sisunihrms_view');
    if (saved && saved !== AppView.LANDING && saved !== AppView.LOGIN && saved !== AppView.SIGNUP && saved !== AppView.DEMO && saved !== AppView.PRICING) {
      setCurrentView(saved as AppView);
      setUser(MOCK_USER);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setUser(MOCK_USER);
    setCurrentView(AppView.DIRECTORY);
    localStorage.setItem('sisunihrms_view', AppView.DIRECTORY);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView(AppView.LANDING);
    localStorage.removeItem('sisunihrms_view');
  };

  const navigate = (view: AppView) => {
    setCurrentView(view);
    localStorage.setItem('sisunihrms_view', view);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMsg = inputMessage;
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputMessage('');
    setIsBotThinking(true);

    const response = await chatWithHRBot(userMsg, `User is ${user?.name}, current view is ${currentView}`);
    setChatHistory(prev => [...prev, { role: 'ai', text: response || "I'm sorry, I missed that." }]);
    setIsBotThinking(false);
  };

  if (currentView === AppView.LANDING) {
    return (
      <div className="min-h-screen bg-white">
        <PublicHeader onNavigate={navigate} />
        <LandingPage onNavigate={navigate} />
      </div>
    );
  }

  if (currentView === AppView.PRICING) {
    return <Pricing onNavigate={navigate} />;
  }

  if (currentView === AppView.SIGNUP) {
    return <SignUp onNavigate={navigate} />;
  }

  if (currentView === AppView.DEMO) {
    return <RequestDemo onNavigate={navigate} />;
  }

  if (currentView === AppView.LOGIN) {
    return <Login onLogin={handleLogin} onNavigate={navigate} />;
  }

  const isPayrollView = [
    AppView.PAYROLL,
    AppView.PAYROLL_PERIODS,
    AppView.PAYROLL_RUN,
    AppView.PAYROLL_SLIP,
    AppView.PAYROLL_USER_SLIP,
    AppView.PAYROLL_BONUS,
    AppView.PAYROLL_GRATUITY
  ].includes(currentView);

  return (
    <div className="min-h-screen bg-white flex font-sans">
      <Sidebar 
        currentView={currentView} 
        onNavigate={navigate} 
        onLogout={handleLogout} 
      />

      <main className={`flex-1 ml-72 relative min-h-screen overflow-y-auto ${isPayrollView ? '' : 'p-12'}`}>
        {currentView === AppView.DASHBOARD && <Dashboard />}
        {currentView === AppView.DIRECTORY && <EmployeeDirectory />}
        {currentView === AppView.AI_INSIGHTS && <AIInsights />}
        {currentView === AppView.ATTENDANCE && <Attendance />}
        {isPayrollView && <Payroll activeSubView={currentView} />}
        {currentView === AppView.PRE_BOARDING && <PreBoarding />}
        {currentView === AppView.TRAVEL_MANAGEMENT && <TravelManagement />}
        {currentView === AppView.CANDIDATE && <CandidateManagement />}
        {currentView === AppView.MAIL_ONBOARD && <MailOnboard />}
        {currentView === AppView.TASK_MANAGEMENT && <TaskManagement />}
        {currentView === AppView.REQUESTS && <Requests />}
        {currentView === AppView.HELP_DESK && <HelpDesk />}
        
        {[AppView.ANNOUNCEMENT, AppView.ORGANIZATION, AppView.PERFORMANCE, AppView.REFERRALS, AppView.SETTINGS, AppView.DATA_CAPTURE].includes(currentView) && (
          <div className="flex flex-col items-center justify-center h-[70vh] text-center text-slate-400">
            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-cubes text-4xl opacity-20"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Module Optimization</h3>
            <p className="max-w-md mx-auto mt-2 text-slate-400 font-medium">We are currently perfecting the {currentView.replace('_', ' ').toLowerCase()} section for the SisuniHRMS Management Suite.</p>
          </div>
        )}

        <button 
          onClick={() => setChatOpen(!chatOpen)}
          className="fixed bottom-10 right-10 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-[60]"
        >
          <i className={`fas ${chatOpen ? 'fa-times' : 'fa-wand-sparkles'} text-2xl`}></i>
        </button>

        {chatOpen && (
          <div className="fixed bottom-28 right-10 w-[420px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 flex flex-col overflow-hidden z-[60] animate-in slide-in-from-bottom-8 fade-in">
            <div className="p-6 bg-[#0D1B3E] text-white flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <i className="fas fa-robot text-lg"></i>
              </div>
              <div>
                <p className="font-bold">SisuniAI Concierge</p>
                <p className="text-xs text-blue-300">Intelligent HR Assistant</p>
              </div>
            </div>
            <div className="h-[450px] p-6 overflow-y-auto space-y-4 bg-white">
              {chatHistory.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-sparkles text-blue-500 text-xl"></i>
                  </div>
                  <p className="text-slate-400 text-sm font-medium px-8 leading-relaxed">I can help with payroll, candidate management, or organizational insights.</p>
                </div>
              )}
              {chatHistory.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[14px] leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-slate-50 text-slate-700 rounded-tl-none font-medium'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isBotThinking && (
                <div className="flex justify-start">
                  <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
            </div>
            <div className="p-6 border-t border-slate-50 flex gap-3 bg-white">
              <input 
                type="text" 
                placeholder="Ask me anything..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-blue-100 outline-none font-medium"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                onClick={handleSendMessage}
                disabled={isBotThinking}
                className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all disabled:opacity-50"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
