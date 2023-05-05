import React, { useState } from 'react';
import styled from 'styled-components';
import {
  AiOutlineRight,
  AiOutlineDown,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const ButtonWithSubButtons = ({ name, sublinks, icon, link }) => {
  const [showSubButtons, setShowSubButtons] = useState(false);

  return (
    <Wrapper className='wrapper'>
      <NavLink
        to={`${sublinks?.length > 0 ? `${link}/${sublinks[0].link}` : link}`}
        className={({ isActive }) => (isActive ? 'green' : '')}
      >
        <button
          className='btn'
          onClick={() => {
            setShowSubButtons(!showSubButtons);
          }}
        >
          <div className='flex'>
            <div>
              <span>{icon}</span>
              <span className='name'>{name}</span>
            </div>
            {sublinks?.length > 0 && (
              <div>
                {showSubButtons ? <AiOutlineDown /> : <AiOutlineRight />}
              </div>
            )}
          </div>
        </button>
      </NavLink>
      {showSubButtons && sublinks?.length > 0 && (
        <div className='sub-btn-container'>
          {sublinks?.map((button, index) => {
            return (
              <NavLink
                to={`${link}/${button.link}`}
                className={({ isActive }) => (isActive ? 'font-weight' : '')}
              >
                <button key={index}>
                  <AiOutlineArrowRight /> {button.name}
                </button>
              </NavLink>
            );
          })}
        </div>
      )}
    </Wrapper>
  );
};

export default ButtonWithSubButtons;

const Wrapper = styled.article`
  a {
    text-decoration: none;
    display: block;
  }

  .btn {
    width: 100%;
    display: block;
    margin: 15px 0;
    transition: color 0.2s linear;
    font-size: 21px;
  }

  .btn:hover {
    color: var(--green);
  }

  .sub-btn-container button {
    margin-left: 20px;
    font-size: 18px;
    transition: all 0.2s linear;
  }

  .sub-btn-container button:hover {
    font-weight: bold;
    color: black;
  }

  .name {
    margin-left: 10px;
  }

  a.green button {
    color: var(--green);
  }

  a.font-weight button {
    font-weight: bold;
  }
`;
