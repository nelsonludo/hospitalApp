import React from 'react';
import { styled as style } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import styled from 'styled-components';

const ProgressBar = ({ percentage, color }) => {
  const BorderLinearProgress = style(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: 'var(--grey)',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      // backgroundColor: `${color}`,
      backgroundImage: `linear-gradient(to right, ${color}, grey)`,
    },
  }));

  return (
    <Wrapper>
      <BorderLinearProgress variant='determinate' value={percentage} />
      <p className='percentage'>{percentage}% changes</p>
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  width: 300px;

  .percentage {
    margin: 10px 0;
    font-size: var(--medium-font-size);
  }
`;
