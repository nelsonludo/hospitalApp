import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const User = ({ name, icon, color, route }) => {
  return (
    <Wrapper style={{ background: `var(--${color})` }}>
      <Link to={`/login/${route}/${name}`}>
        {icon}
        <h4 className='name'>{name}</h4>
      </Link>
    </Wrapper>
  );
};

export default User;

const Wrapper = styled.article`
  border-radius: 10px;

  a {
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    min-width: 200px;
    color: black;
  }

  svg {
    font-size: 70px;
    margin-bottom: 10px;
    color: black;
  }

  a:active {
    color: black;
  }
`;
