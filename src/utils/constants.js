import React from 'react';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import { BsHospitalFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import SystemAdminDashboard from '../components/SystemAdminDashboard';
import AllHospitalAdmins from '../components/AllHospitalAdmins';

export const API_LINK = 'http://127.0.0.1:8000';
export const userTypes = [
  {
    name: 'System Admin',
    icon: <RiAdminFill />,
    color: 'blueish',
    route: 'system_admin',
  },
  {
    name: 'Hospital Admin',
    icon: <BsHospitalFill />,
    color: 'greenish',
    route: 'hospital_admin',
  },
  {
    name: 'Doctor',
    icon: <GiPlagueDoctorProfile />,
    color: 'green',
    route: 'doctor',
  },
  {
    name: 'Patient',
    icon: <FaUserAlt />,
    color: 'blueish',
    route: 'patient',
  },
];

export const systemAdminLinks = [
  {
    name: 'Dashboard',
    link: 'dashboard',
    element: <SystemAdminDashboard />,
    icon: <AiOutlineHome />,
  },
  {
    name: 'Hospitals',
    link: 'hospitals',
    element: null,
    icon: <BsHospitalFill />,
  },
  {
    name: 'Hospital Administrators',
    link: 'hospital_admins',
    element: <AllHospitalAdmins />,
    icon: <FaUserAlt />,
    sublinks: [
      {
        name: 'All Hospital Administrators',
        link: 'all_hospital_admins',
        element: <AllHospitalAdmins />,
      },
    ],
  },
  {
    name: 'System Administrators',
    link: 'system_admins',
    element: null,
    icon: <RiAdminFill />,
  },
];
