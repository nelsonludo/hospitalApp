import React from 'react';
import styled from 'styled-components';

const SystemAdminTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  );
};

export default SystemAdminTitle;

const Wrapper = styled.article`
  background-color: var(--green);
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
  padding-bottom: 100px;
  color: var(--white);
  font-size: var(--big-font-size);

  h1 {
    font-weight: normal;
  }
`;
