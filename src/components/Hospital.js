import React from 'react';
import AllHospitals from './AllHospitals';

const Hospital = ({ subRightDisplay }) => {
  if (subRightDisplay === 'All Hospitals') {
    return <AllHospitals />;
  }

  if (subRightDisplay === 'Add Hospital') {
    return <h1>Add Hospital</h1>;
  }

  if (subRightDisplay === 'Hospital  Profiles') {
    return <h1>Hospital Profiles</h1>;
  }
};

export default Hospital;
