import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        type="email" 
        placeholder="Correo electrónico" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <Input 
        type="password" 
        placeholder="Contraseña" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <Button type="submit" variant="primary">Iniciar Sesión</Button>
    </form>
  );
}

export default LoginForm;
