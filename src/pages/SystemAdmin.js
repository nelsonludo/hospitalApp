import React, { useState } from 'react';
import styled from 'styled-components';
import SystemAdminLeft from '../components/SystemAdminLeft';
import SystemAdminRight from '../components/SystemAdminRight';

const SystemAdmin = () => {
  const [rightDisplay, setRightDisplay] = useState('dashboard');

  return (
    <Wrapper>
      <SystemAdminLeft
        rightDisplay={rightDisplay}
        setRightDisplay={setRightDisplay}
      />
      <SystemAdminRight
        rightDisplay={rightDisplay}
        setRightDisplay={setRightDisplay}
      />
    </Wrapper>
  );
};

export default SystemAdmin;

const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
`;
