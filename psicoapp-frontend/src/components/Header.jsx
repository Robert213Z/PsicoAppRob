import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/dashboard">PsicoApp</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/perfil">Perfil</Link></li>
          <li><Link to="/citas">Citas</Link></li>
          <li><Link to="/reportes">Reportes</Link></li>
          <li><Link to="/logout" onClick={() => localStorage.removeItem('token')}>Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
