import React from 'react'
import './Input.scss'

interface IInput {
  type: string,
  description?: string,
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void
}

const Input: React.FC<IInput> = ({ type, description, onInput }) => {
  return (
    <label className='input__label'>
      {description}
      <input className='input' type={type} onInput={onInput} />
    </label>
  )
}

export default Input;
