
export enum AppView {
  LANDING = 'LANDING',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  DEMO = 'DEMO',
  DASHBOARD = 'DASHBOARD',
  DIRECTORY = 'DIRECTORY',
  ATTENDANCE = 'ATTENDANCE',
  LEAVE = 'LEAVE',
  PAYROLL = 'PAYROLL',
  PAYROLL_PERIODS = 'PAYROLL_PERIODS',
  PAYROLL_RUN = 'PAYROLL_RUN',
  PAYROLL_SLIP = 'PAYROLL_SLIP',
  PAYROLL_USER_SLIP = 'PAYROLL_USER_SLIP',
  PAYROLL_BONUS = 'PAYROLL_BONUS',
  PAYROLL_GRATUITY = 'PAYROLL_GRATUITY',
  AI_INSIGHTS = 'AI_INSIGHTS',
  PRE_BOARDING = 'PRE_BOARDING',
  SETTINGS = 'SETTINGS',
  PRICING = 'PRICING',
  ANNOUNCEMENT = 'ANNOUNCEMENT',
  ORGANIZATION = 'ORGANIZATION',
  PERFORMANCE = 'PERFORMANCE',
  REQUESTS = 'REQUESTS',
  REFERRALS = 'REFERRALS',
  TRAVEL_MANAGEMENT = 'TRAVEL_MANAGEMENT',
  DATA_CAPTURE = 'DATA_CAPTURE',
  TASK_MANAGEMENT = 'TASK_MANAGEMENT',
  HELP_DESK = 'HELP_DESK',
  CANDIDATE = 'CANDIDATE',
  MAIL_ONBOARD = 'MAIL_ONBOARD'
}

export interface Employee {
  id: string;
  employeeId: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  status: 'active' | 'on-leave' | 'remote';
  avatar: string;
  joinDate: string;
}

export interface AttendanceRecord {
  id: string;
  date: string;
  checkIn: string;
  checkOut: string | null;
  status: 'present' | 'absent' | 'late';
}

export interface User {
  name: string;
  email: string;
  role: string;
  avatar: string;
}