import React from 'react';
import styled from 'styled-components';
import SystemAdminLeft from '../components/SystemAdminLeft';
import { Outlet } from 'react-router-dom';

const SystemAdmin = () => {
  return (
    <Wrapper>
      <div className='left'>
        <SystemAdminLeft />
      </div>
      <div className='right'>
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default SystemAdmin;

const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;

  .left {
    width: 20%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    section {
      height: 100%;
    }
  }

  .right {
    width: 80%;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: scroll;
  }
`;
