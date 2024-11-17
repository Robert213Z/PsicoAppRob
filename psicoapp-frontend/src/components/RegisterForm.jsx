import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function RegisterForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        type="text" 
        placeholder="Nombre completo" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
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
      <Button type="submit" variant="primary">Registrarse</Button>
    </form>
  );
}

export default RegisterForm;
