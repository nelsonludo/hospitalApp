import React from 'react';
import styled from 'styled-components';
import { BsArrowLeftRight } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { AiFillBell } from 'react-icons/ai';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { AiOutlineSetting } from 'react-icons/ai';

const SystemAdminNavbar = () => {
  return (
    <Wrapper className='flex'>
      <h1 className='logo'>HospitalApplication</h1>
      <button>
        <BsArrowLeftRight />
      </button>
      <div className='message'>
        <button>
          <IoMdMail />
        </button>
      </div>
      <div className='alert'>
        <button>
          <AiFillBell />
        </button>
      </div>
      <div className='search-form'>
        <input type='text' name='search' id='search' placeholder='Search' />
      </div>
      <button>
        <AiOutlinePoweroff />
      </button>
      <button>
        <AiOutlineSetting />
      </button>
    </Wrapper>
  );
};

export default SystemAdminNavbar;

const Wrapper = styled.nav`
  color: var(--white);
  background-color: var(--green);
  padding: 25px;
  flex-wrap: wrap;
  box-shadow: 0px 0px 30px black;
  /* margin-bottom: 50px; */

  .logo {
    font-weight: normal;
    font-size: var(--big-font-size);
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: var(--big-font-size);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-form {
    flex-grow: 0.5;
  }

  .search-form input {
    width: 100%;
    height: 100%;
    border: 2px solid var(--white);
    border-radius: 8px;
    outline: none;
    display: block;
    padding: 10px 20px;
    background-color: transparent;
    color: var(--white);
    font-size: var(--medium-font-size);
  }

  input::placeholder {
    color: var(--white);
  }
`;
