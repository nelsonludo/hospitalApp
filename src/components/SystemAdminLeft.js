import React from 'react';
import styled from 'styled-components';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';

const SystemAdminLeft = ({ rightDisplay, setRightDisplay }) => {
  return (
    <Wrapper>
      <div className='flex'>
        <button onClick={() => setRightDisplay('dashbord')}>Home</button>
        <p>System Admin</p>
      </div>
      <div className='flex2'>
        <img src='/images/profile.jpg' alt='' className='profile' />
      </div>
      <div className='additional-info'>
        <p className='name'>My name here</p>
        <p className='profession'>My profession here</p>
      </div>
      <div className='list-of-buttons'>
        <div className='btn-container'>
          <button
            className={`${rightDisplay === 'dashbord' && 'green'}`}
            onClick={() => setRightDisplay('dashbord')}
          >
            Dashbord
          </button>
        </div>
        <div className='btn-container'>
          <button
            className={`${rightDisplay === 'hospitals' && 'green'}`}
            onClick={() =>
              rightDisplay === 'hospitals'
                ? setRightDisplay('dashbord')
                : setRightDisplay('hospitals')
            }
          >
            Hospitals{' '}
            {rightDisplay === 'hospitals' ? (
              <AiOutlineDown />
            ) : (
              <AiOutlineRight />
            )}
          </button>
          {rightDisplay === 'hospitals' && (
            <div className='sub-btn-container'>
              <button>All Hospital</button>
              <button>Add Hospital</button>
              <button>Hospital Profiles</button>
            </div>
          )}
        </div>
        <div className='btn-container'>
          <button
            className={`${
              rightDisplay === 'hospital_administrators' && 'green'
            }`}
            onClick={() =>
              rightDisplay === 'hospital_administrators'
                ? setRightDisplay('dashbord')
                : setRightDisplay('hospital_administrators')
            }
          >
            Hospitals Administrators{' '}
            {rightDisplay === 'hospital_administrators' ? (
              <AiOutlineDown />
            ) : (
              <AiOutlineRight />
            )}
          </button>
          {rightDisplay === 'hospital_administrators' && (
            <div className='sub-btn-container'>
              <button>All Hospital Administrators</button>
              <button>Add Hospital Administrators</button>
              <button>Hospital Administrators Profiles</button>
            </div>
          )}
        </div>
        <div className='btn-container'>
          <button
            className={`${rightDisplay === 'system_administrator' && 'green'}`}
            onClick={() =>
              rightDisplay === 'system_administrator'
                ? setRightDisplay('dashbord')
                : setRightDisplay('system_administrator')
            }
          >
            System Administrators{' '}
            {rightDisplay === 'system_administrator' ? (
              <AiOutlineDown />
            ) : (
              <AiOutlineRight />
            )}
          </button>
          {rightDisplay === 'system_administrator' && (
            <div className='sub-btn-container'>
              <button>All System Administrators</button>
              <button>Add System Administrators</button>
              <button>System Administrators Profiles</button>
            </div>
          )}
        </div>
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

  .green {
    color: var(--green);
  }
`;
