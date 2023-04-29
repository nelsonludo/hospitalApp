import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const User = ({ name, icon, color, route }) => {
  return (
    <Wrapper style={{ background: `var(--${color})` }}>
      <Link to={`/login/${route}/${name}`}>
        {icon}
        <h4>{name}</h4>
      </Link>
    </Wrapper>
  );
};

export default User;

const Wrapper = styled.article``;
