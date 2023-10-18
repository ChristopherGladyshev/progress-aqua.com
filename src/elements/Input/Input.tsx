import React from 'react'
import './Input.scss'

interface IInput {
  type: string,
  description?: string,
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void
  isError?: boolean,
}

const Input: React.FC<IInput> = ({ type, description, onInput, isError }) => {
  return (
    <label className={`input__label ${isError ? 'input__error' : ''}`}>
      {description}
      <input className='input' type={type} onInput={onInput} />
      <div className='input__error--text'>Поле обязательно для заполнения</div>
    </label>
  )
}

export default Input;
