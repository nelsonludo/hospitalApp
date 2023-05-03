import React, { useState } from 'react';
import styled from 'styled-components';
import {
  AiOutlineRight,
  AiOutlineDown,
  AiOutlineArrowRight,
} from 'react-icons/ai';

const ButtonWithSubButtons = ({
  name,
  subButtons,
  pageName,
  icon,
  rightDisplay,
  setRightDisplay,
}) => {
  const [showSubButtons, setShowSubButtons] = useState(false);

  return (
    <Wrapper>
      <button
        className={`${rightDisplay === pageName ? 'btn green' : 'btn'}`}
        onClick={() => {
          setRightDisplay(pageName);
          setShowSubButtons(!showSubButtons);
        }}
      >
        <div className='flex'>
          <div>
            <span>{icon}</span>
            <span className='name'>{name}</span>
          </div>
          {subButtons?.length > 0 && (
            <div>{showSubButtons ? <AiOutlineDown /> : <AiOutlineRight />}</div>
          )}
        </div>
      </button>
      {showSubButtons &&
        rightDisplay === pageName &&
        subButtons?.length > 0 && (
          <div className='sub-btn-container'>
            {subButtons?.map((button, index) => {
              return (
                <button key={index}>
                  <AiOutlineArrowRight /> {button}
                </button>
              );
            })}
          </div>
        )}
    </Wrapper>
  );
};

export default ButtonWithSubButtons;

const Wrapper = styled.article`
  button {
    display: block;
    margin: 15px 0;

    transition: color 0.2s linear;
  }

  button:hover {
    color: var(--green);
  }

  .btn {
    width: 100%;
  }

  .sub-btn-container button {
    margin-left: 20px;
    font-size: 16px;
    transition: all 0.2s linear;
  }

  .name {
    margin-left: 10px;
  }

  .green {
    color: var(--green);
  }
`;
