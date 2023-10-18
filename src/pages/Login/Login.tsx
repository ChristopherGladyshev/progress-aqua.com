import React, { useState } from 'react'
import { Input } from '../../elements';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { fetchLogin, fetchRegistration } from '../../store/registration/userSlice';
import { useNavigate } from 'react-router-dom';
import './Login.scss'

const Login = () => {
  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const emailHeandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
    setIsEmailError(false);
  }

  const passwordHeandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
    setIsPasswordError(false);
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
      return;
    }
    if (!email.length) setIsEmailError(true);
    if (!password.length) setIsPasswordError(true);
  }

  return (
    <div className='login-page'>
      <div className='form'>
        <h4>ВХОД</h4>
        <Input isError={isEmailError} type='email' description='Логин/Email' onInput={emailHeandler.bind(this)} />
        <Input isError={isPasswordError} type='password' description='Пароль' onInput={passwordHeandler.bind(this)} />
        <div className='reg-form__btn'>
          <button className='btn' onClick={() => regFetch()}>РЕГИСТРАЦИЯ</button>
          <button className='btn' onClick={() => logFetch()}>ВОЙТИ</button>
        </div>
        {isLoading && <p>Loading</p>}
        {error && <p>Error {error}</p>}
      </div>
    </div>
  )
}

export default Login
