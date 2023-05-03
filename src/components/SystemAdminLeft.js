import React from 'react';
import styled from 'styled-components';

const SystemAdminLeft = () => {
  return (
    <Wrapper>
      <div className='flex'>
        <button>Home</button>
        <button>System Admin</button>
      </div>
      <div className='flex2'>
        <img src='/images/profile.jpg' alt='' className='profile' />
      </div>
      <div className='additional-info'>
        <p className='name'>My name here</p>
        <p className='profession'>My profession here</p>
      </div>
    </Wrapper>
  );
};

export default SystemAdminLeft;

const Wrapper = styled.section`
  width: 20%;
  background-color: var(--white);
  padding: 20px 15px;

  .profile {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
`;
