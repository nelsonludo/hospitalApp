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
    <Wrapper>
      {error && <h1>An error occured.</h1>}
      <form onSubmit={handleSubmit}>
        <h1>{name}</h1>
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
      </form>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.section``;
