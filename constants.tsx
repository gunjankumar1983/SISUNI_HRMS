
import { Employee, AttendanceRecord } from './types';

export const MOCK_USER = {
  name: 'Alex Rivera',
  email: 'alex.rivera@sisunihrms.com',
  role: 'HR Manager',
  avatar: 'https://picsum.photos/seed/alex/100/100'
};

export const MOCK_EMPLOYEES: Employee[] = [
  { 
    id: '1', 
    employeeId: 'RD/2023/0220/14',
    name: 'Divya Rajendran', 
    role: 'Hr Coordinator', 
    department: 'Human Resources', 
    email: 'divya.rajendran@sisuni.com', 
    phone: '9976547893',
    status: 'active', 
    avatar: 'https://i.pravatar.cc/150?u=divya', 
    joinDate: '2023-02-20' 
  },
  { 
    id: '2', 
    employeeId: 'RD/26102022/0245',
    name: 'Evanjeline Oswald', 
    role: 'Software Engineer', 
    department: 'Engineering', 
    email: 'evanjeline.oswald@sisuni.com', 
    phone: '7338701437',
    status: 'active', 
    avatar: 'https://i.pravatar.cc/150?u=evanjeline', 
    joinDate: '2022-10-26' 
  },
  { 
    id: '3', 
    employeeId: 'RD/26102022/0246',
    name: 'Gibson S', 
    role: 'Software Engineer', 
    department: 'Engineering', 
    email: 'gibson.sathiyavelu@sisuni.com', 
    phone: '8825869083',
    status: 'active', 
    avatar: 'https://i.pravatar.cc/150?u=gibson', 
    joinDate: '2022-10-26' 
  },
  { 
    id: '4', 
    employeeId: 'RD/10102022/0230',
    name: 'Gokul', 
    role: 'Software Engineer', 
    department: 'Engineering', 
    email: 'gokul.imayavaramban@sisuni.com', 
    phone: '9585866439',
    status: 'active', 
    avatar: 'https://i.pravatar.cc/150?u=gokul', 
    joinDate: '2022-10-10' 
  },
  { 
    id: '5', 
    employeeId: 'RD/2023/0415/22',
    name: 'Gurumoorthy', 
    role: 'Software Engineer', 
    department: 'Engineering', 
    email: 'guru.moorthy@sisuni.com', 
    phone: '9876543210',
    status: 'active', 
    avatar: 'https://i.pravatar.cc/150?u=guru', 
    joinDate: '2023-04-15' 
  },
  { 
    id: '6', 
    employeeId: 'RD/2023/0415/23',
    name: 'Hariharan R', 
    role: 'Software Engineer', 
    department: 'Engineering', 
    email: 'hari.haran@sisuni.com', 
    phone: '9876543211',
    status: 'active', 
    avatar: 'https://i.pravatar.cc/150?u=hari', 
    joinDate: '2023-04-15' 
  },
  { 
    id: '7', 
    employeeId: 'RD/2023/0512/05',
    name: 'Jayarama Krishnan', 
    role: 'Hr Coordinator', 
    department: 'Human Resources', 
    email: 'jaya.krishna@sisuni.com', 
    phone: '9876543212',
    status: 'active', 
    avatar: 'https://i.pravatar.cc/150?u=jaya', 
    joinDate: '2023-05-12' 
  },
  { 
    id: '8', 
    employeeId: 'RD/2021/1102/01',
    name: 'Jeb Million', 
    role: 'CTO', 
    department: 'Leadership', 
    email: 'jeb.million@sisuni.com', 
    phone: '9876543213',
    status: 'active', 
    avatar: 'https://i.pravatar.cc/150?u=jeb', 
    joinDate: '2021-11-02' 
  },
];

export const MOCK_ATTENDANCE: AttendanceRecord[] = [
  { id: 'a1', date: '2024-05-20', checkIn: '08:45 AM', checkOut: '05:30 PM', status: 'present' },
  { id: 'a2', date: '2024-05-19', checkIn: '09:15 AM', checkOut: '06:00 PM', status: 'late' },
  { id: 'a3', date: '2024-05-18', checkIn: '08:55 AM', checkOut: '05:15 PM', status: 'present' },
];
