import React from 'react';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import { BsHospitalFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';

export const API_LINK = 'http://127.0.0.1:8000';
export const userTypes = [
  {
    name: 'System Admin',
    icon: <RiAdminFill />,
    color: '',
    route: 'system_admin',
  },
  {
    name: 'Hospital Admin',
    icon: <BsHospitalFill />,
    color: '',
    route: 'hospital_admin',
  },
  {
    name: 'Doctor',
    icon: <GiPlagueDoctorProfile />,
    color: '',
    route: 'doctor',
  },
  {
    name: 'Patient',
    icon: <FaUserAlt />,
    color: '',
    route: 'patient',
  },
];
