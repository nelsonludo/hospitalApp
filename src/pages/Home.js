import React from 'react';
import styled from 'styled-components';
import { userTypes } from '../utils/constants';
import User from '../components/User';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Wrapper className='flex2'>
        <div className='container'>
          <h1>Welcome to HospitalApp</h1>
          <h2>Select your user type below</h2>
          <div className='users flex'>
            {userTypes.map((user, index) => {
              return <User key={index} {...user} />;
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.section`
  width: 100%;
  height: var(--height-without-navbar);
  background-image: url('/images/bg-home.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;

  h1,
  h2 {
    text-align: center;
  }

  h1 {
    color: var(--white);
    font-size: var(--massive-font-size);
    margin: 20px 0;
  }

  h2 {
    color: var(--whitish);
    font-size: var(--medium-font-size);
    font-weight: normal;
    margin-bottom: 20px;
  }

  .container {
    width: 70%;
    margin-top: 10%;
  }
`;
