import React, { useState } from 'react'
import { Input } from '../../elements';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { fetchLogin, fetchRegistration } from '../../store/registration/userSlice';
import { useNavigate } from 'react-router-dom';
import './Login.scss'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const emailHeandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }

  const passwordHeandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  const regFetch = async () => {
    if (email.length && password.length) {
      const data = await dispatch(fetchRegistration({ email, password }));
      if (data.meta.requestStatus !== 'rejected') navigate('/dashboard')
    }
  }

  const logFetch = async () => {
    if (email.length && password.length) {
      const data = await dispatch(fetchLogin({ email, password }));
      if (data.meta.requestStatus !== 'rejected') navigate('/dashboard')
    }
  }

  return (
    <div className='wrapper'>
      <div className='form'>
        Member Login
        <Input type='email' description='email' onInput={emailHeandler.bind(this)} />
        <Input type='password' description='password' onInput={passwordHeandler.bind(this)} />
        <div className='reg-form__btn'>
          <button className='btn' onClick={() => regFetch()}>Registration</button>
          <button className='btn' onClick={() => logFetch()}>Login</button>
        </div>
        {isLoading && <p>Loading</p>}
        {error && <p>Error {error}</p>}
      </div>
    </div>
  )
}

export default Login
