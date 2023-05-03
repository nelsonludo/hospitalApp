import React from 'react';
import styled from 'styled-components';
import SystemAdminLeft from '../components/SystemAdminLeft';
import SystemAdminRight from '../components/SystemAdminRight';

const SystemAdmin = () => {
  return (
    <Wrapper>
      <SystemAdminLeft />
      <SystemAdminRight />
    </Wrapper>
  );
};

export default SystemAdmin;

const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
`;
