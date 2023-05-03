import React from 'react';
import styled from 'styled-components';
import SystemAdminNavbar from './SystemAdminNavbar';
import SystemAdminTitle from './SystemAdminTitle';

const SystemAdminRight = ({ rightDisplay }) => {
  if (rightDisplay === 'dashboard') {
    return (
      <Wrapper>
        <SystemAdminNavbar />
        <SystemAdminTitle title={'Dashboard'} />
        <h1>dashboard</h1>
      </Wrapper>
    );
  }

  if (rightDisplay === 'hospital') {
    return (
      <Wrapper>
        <SystemAdminNavbar />
        <SystemAdminTitle title={'Hospital'} />
        <h1>hospital</h1>
      </Wrapper>
    );
  }

  if (rightDisplay === 'hospital_administrator') {
    return (
      <Wrapper>
        <SystemAdminNavbar />
        <SystemAdminTitle title={'Hospital Administrator'} />
        <h1>hospital-administrator</h1>
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
  width: 80%;
`;
