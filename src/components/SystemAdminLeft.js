import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import ButtonWithSubButtons from './ButtonWithSubButtons';
import { systemAdminLinks } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const SystemAdminLeft = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className='flex'>
        <button className='home' onClick={() => navigate('dashboard')}>
          <div className='flex2'>
            <AiOutlineHome style={{ marginRight: '10px' }} /> Home
          </div>
        </button>
        <p className='job'>System Admin</p>
      </div>
      <div className='flex2'>
        <div className='profile-container'>
          <img src='/images/profile.jpg' alt='' className='profile' />
        </div>
      </div>
      <div className='additional-info'>
        <h2 className='name'>My name here</h2>
        <h3 className='profession'>profession</h3>
      </div>
      <div className='list-of-buttons'>
        {systemAdminLinks.map((item, index) => {
          return <ButtonWithSubButtons key={index} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

export default SystemAdminLeft;

const Wrapper = styled.section`
  padding: 20px 15px;
  color: var(--black);
  font-size: 18px;
  box-shadow: 4px 0 20px -2px var(--grey);

  button {
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--black);
    font-size: 20px;
    color: grey;
  }

  .job {
    color: grey;
  }

  .home {
    border: 2px solid var(--green);
    padding: 15px;
    border-radius: 15px;
    font-weight: bold;
  }

  .profile-container {
    background-color: var(--whitish);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    padding: 20px;
  }

  .profile {
    width: 100px;
    height: 100px;
    object-fit: contain;
    border: 3px solid white;
    border-radius: 50%;
  }

  .additional-info {
    color: grey;
    text-align: center;
    padding: 20px 0;
    border-bottom: 2px solid var(--grey);
  }

  .additional-info h3 {
    font-weight: normal;
  }

  .list-of-buttons {
    margin-top: 50px;
  }
`;
