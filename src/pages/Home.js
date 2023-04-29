import React from 'react';
import styled from 'styled-components';
import { userTypes } from '../utils/constants';
import User from '../components/User';

const Home = () => {
  return (
    <Wrapper>
      <h1>Welcome to HospitalApp</h1>
      <h2>Select your user type below</h2>
      <div className='users'>
        {userTypes.map((user, index) => {
          return <User key={index} {...user} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section``;
