import React from 'react';
import './Input.css';

function Input({ type = 'text', value, onChange, placeholder, className = '' }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input ${className}`}
    />
  );
}

export default Input;
