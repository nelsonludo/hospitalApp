import React, { useState } from 'react';
import styled from 'styled-components';
import SystemAdminLeft from '../components/SystemAdminLeft';
import { Outlet } from 'react-router-dom';

const SystemAdmin = () => {
  return (
    <Wrapper>
      <SystemAdminLeft />
      <Outlet />
    </Wrapper>
  );
};

export default SystemAdmin;

const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
`;
