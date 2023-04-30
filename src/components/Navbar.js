import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='container flex'>
        <Link to={'/'} className='logo'>
          HospitalApp
        </Link>
        <div className='flex help'>
          <Link to={'/help'}>Help</Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.section`
  background-color: var(--green);
  color: var(--white);
  padding: 15px 0;

  .logo {
    font-size: var(--big-font-size);
  }

  .help {
    border: 2px solid var(--white);
    border-radius: 5px;
    padding: 3px 10px;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: var(--medium-font-size);
  }
`;
