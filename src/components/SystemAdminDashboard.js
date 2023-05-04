import React from 'react';
import styled from 'styled-components';
import SystemAdminNavbar from './SystemAdminNavbar';
import SystemAdminTitle from './SystemAdminTitle';

const SystemAdminDashboard = () => {
  return (
    <Wrapper>
      <SystemAdminNavbar />
      <SystemAdminTitle title={'System Admin Dashboard'} />
    </Wrapper>
  );
};

export default SystemAdminDashboard;

const Wrapper = styled.section`
  width: 75%;
`;
