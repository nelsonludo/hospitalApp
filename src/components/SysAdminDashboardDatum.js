import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const SysAdminDashboardDatum = ({
  title,
  percentage,
  number,
  colorPercentage,
}) => {
  return (
    <Wrapper>
      <h1 className='number'>{number}</h1>
      <h2 className='text'>{title}</h2>
      <ProgressBar percentage={percentage} color={colorPercentage} />
    </Wrapper>
  );
};

export default SysAdminDashboardDatum;

const Wrapper = styled.article`
  background-color: white;
  padding: 25px 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px var(--black);

  .number {
    font-size: 50px;
    font-weight: normal;
  }

  .text {
    margin-bottom: 20px;
    font-weight: normal;
  }
`;
