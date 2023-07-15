import React, { useState } from 'react'
import { Input } from '../../elements';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { fetchRegistration } from '../../store/registration/userSlice';

const AuthenticationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector((state) => state.user);

  const emailHeandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }

  const passwordHeandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  const regFetch = async () => {
    dispatch(fetchRegistration({ email, password }));
  }

  return (
    <div>
      AuthenticationForm
      <Input type='email' description='email' onInput={emailHeandler.bind(this)} />
      <Input type='password' description='password' onInput={passwordHeandler.bind(this)} />
      <button onClick={() => regFetch()}>registration</button>
      {isLoading && <p>Loading</p>}
      {error && <p>Error {error}</p>}
    </div>
  )
}


export default AuthenticationForm;
