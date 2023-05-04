import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { API_LINK } from '../utils/constants';
import { useGlobalContext } from '../contexts/globalContext';
import { SET_LOADING_FALSE, SET_LOADING_TRUE } from '../utils/actions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { name, route } = useParams();
  const { dispatch } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter all fields');
      return;
    }

    try {
      dispatch({ type: SET_LOADING_TRUE });
      const { data } = await axios({
        method: 'post',
        url: `${API_LINK}/${route}/dologin`,
        data: {
          email,
          password,
        },
      });

      console.log(data.system_admin_credentials[0]);
      setErrorMessage('');
      dispatch({ type: SET_LOADING_FALSE });

      if (route === 'system_admin') {
        navigate('/system_admin');
      } else if (route === 'hospital_admin') {
        navigate('/hospital_admin');
      } else if (route === 'doctor') {
        navigate('/doctor');
      } else {
        navigate('/patient');
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('Something went wrong');
      dispatch({ type: SET_LOADING_FALSE });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage('');
    }, 1000);
  }, [errorMessage]);

  return (
    <>
      <Navbar />
      <Wrapper className='flex2'>
        <form onSubmit={handleSubmit}>
          <h1 className='title'>{name} Login</h1>
          <div className='contain-padding'>
            <div className='contain'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='contain'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type='submit'>Login Now</button>
            {errorMessage && <h2 className='error'>{errorMessage}</h2>}
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default Login;

const Wrapper = styled.section`
  height: var(--height-without-navbar);
  background-image: url('/images/login-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  form {
    margin-top: 10%;
    background-color: var(--whitish);
    border-radius: 10px;
    width: 40%;
    max-width: 500px;
  }

  button {
    width: 100%;
    outline: none;
    border: none;
    padding: 10px 10px;
    background-color: var(--green);
    border-radius: 5px;
    color: var(--white);
    font-size: var(--medium-font-size);
  }

  label {
    margin-bottom: 5px;
    font-size: var(--medium-font-size);
  }

  input {
    outline: none;
    border: none;
    padding: 10px 10px;
    background-color: var(--grey);
  }

  input:focus,
  input:active,
  input:invalid,
  input:valid {
    background-color: var(--grey);
  }

  .title {
    background-color: var(--green);
    color: var(--white);
    text-align: center;
    border-radius: 10px 10px 0 0;
    padding: 10px 0;
    font-weight: normal;
    font-size: var(--big-font-size);
  }

  .contain-padding {
    padding: 20px 30px;
  }

  .contain {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  .error {
    text-align: center;
    color: red;
    margin-top: 10px;
  }
`;
