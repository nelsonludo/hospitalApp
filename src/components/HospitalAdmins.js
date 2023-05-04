import React from 'react';
import AllHospitalAdmins from './AllHospitalAdmins';

const HospitalAdmins = ({ subRightDisplay }) => {
  if (subRightDisplay === 'All Hospital Administrators') {
    return <AllHospitalAdmins />;
  }

  if (subRightDisplay === 'Add Hospital Administrator') {
    return <h1>Add Hospital Administrator</h1>;
  }

  if (subRightDisplay === 'Hospital Administrator Profiles') {
    return <h1>Hospital Administrator Profiles</h1>;
  }
};

export default HospitalAdmins;
