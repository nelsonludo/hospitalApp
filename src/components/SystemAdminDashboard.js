import React from 'react';
import styled from 'styled-components';
import SystemAdminNavbar from './SystemAdminNavbar';
import SystemAdminTitle from './SystemAdminTitle';
import SysAdminDashboardDatum from './SysAdminDashboardDatum';

const SystemAdminDashboard = () => {
  return (
    <Wrapper>
      <SystemAdminNavbar />
      <SystemAdminTitle title={'System Admin Dashboard'} />
      <div className='inside'>
        <div className='flex'>
          <SysAdminDashboardDatum
            title={'Newly added hospitals'}
            percentage={30}
            number={104}
            colorPercentage='green'
          />
          <SysAdminDashboardDatum
            title={'Newly added hospitals admins'}
            percentage={60}
            number={104}
            colorPercentage='orange'
          />
          <SysAdminDashboardDatum
            title={'Created by you'}
            percentage={90}
            number={104}
            colorPercentage='pink'
          />
        </div>
        <img src='/images/data.png' alt='' className='data' />
      </div>
    </Wrapper>
  );
};

export default SystemAdminDashboard;

const Wrapper = styled.section`
  .data {
    margin-top: 50px;
    display: block;
    width: 100%;
    object-fit: cover;
  }
`;
