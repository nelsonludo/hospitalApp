import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { API_LINK } from '../utils/constants';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const { name, route } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter all fields');
      return;
    }

    try {
      const { data } = await axios({
        method: 'post',
        url: `${API_LINK}/${route}/dologin`,
        data: {
          email,
          password,
        },
      });
      console.log(data);
      alert('logged in successfully.');
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
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
          {error && <h2 className='error'>An error occured.</h2>}
        </div>
      </form>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.section`
  height: var(--height-without-navbar);
  background-color: pink;

  form {
    margin-top: 17%;
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
