import React from 'react';
import styled from 'styled-components';
import SystemAdminNavbar from './SystemAdminNavbar';
import SystemAdminTitle from './SystemAdminTitle';
import Dashboard from './Dashboard';
import Hospital from './Hospital';
import HospitalAdmins from './HospitalAdmins';

const SystemAdminRight = ({ rightDisplay, subRightDisplay }) => {
  if (rightDisplay === 'dashboard') {
    return (
      <Wrapper>
        <SystemAdminNavbar />
        <SystemAdminTitle title={'Dashboard'} />
        <Dashboard />
      </Wrapper>
    );
  }

  if (rightDisplay === 'hospital') {
    return (
      <Wrapper>
        <SystemAdminNavbar />
        <SystemAdminTitle title={'Hospital'} />
        <Hospital subRightDisplay={subRightDisplay} />
      </Wrapper>
    );
  }

  if (rightDisplay === 'hospital_administrator') {
    return (
      <Wrapper>
        <SystemAdminNavbar />
        <SystemAdminTitle title={'Hospital Administrator'} />
        <HospitalAdmins subRightDisplay={subRightDisplay} />
      </Wrapper>
    );
  }

  if (rightDisplay === 'system_administrator') {
    return (
      <Wrapper>
        <SystemAdminNavbar />
        <SystemAdminTitle title={'System Administrator'} />
        <h1>system-administrator</h1>
      </Wrapper>
    );
  }
};

export default SystemAdminRight;

const Wrapper = styled.section`
  width: 75%;
`;
