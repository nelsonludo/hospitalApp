import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { BsHospitalFill } from 'react-icons/bs';
import { RiAdminFill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import ButtonWithSubButtons from './ButtonWithSubButtons';
import { systemAdminLinks } from '../utils/constants';

const SystemAdminLeft = () => {
  return (
    <Wrapper>
      <div className='flex'>
        <button className='home'>
          <div className='flex2'>
            <AiOutlineHome style={{ marginRight: '5px' }} /> Home
          </div>
        </button>
        <p>System Admin</p>
      </div>
      <div className='flex2'>
        <img src='/images/profile.jpg' alt='' className='profile' />
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
  width: 25%;
  background-color: var(--white);
  padding: 20px 15px;
  color: var(--black);
  font-size: 18px;
  box-shadow: 4px 0 10px -2px #888;

  button {
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--black);
    font-size: 18px;
  }

  .home {
    border: 2px solid var(--green);
    padding: 10px;
    border-radius: 15px;
    font-weight: bold;
  }

  .profile {
    width: 100px;
    height: 100px;
    object-fit: contain;
    border: 3px solid red;
    border-radius: 50%;
    margin-top: 50px;
  }

  .additional-info {
    color: var(--grey);
    text-align: center;
    padding: 20px 0;
    border-bottom: 2px solid var(--grey);
  }

  .additional-info h2,
  .additional-info h3 {
    font-weight: normal;
  }

  .list-of-buttons {
    margin-top: 50px;
  }
`;
