import React from 'react';
import styled from 'styled-components';
import { userTypes } from '../utils/constants';
import User from '../components/User';

const Home = () => {
  return (
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
  );
};

export default Home;

const Wrapper = styled.section`
  width: 100%;
  /* background-color: pink; */
  height: var(--height-without-navbar);

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
    background-color: red;
    width: 70%;
    margin-top: 17%;
  }
`;
