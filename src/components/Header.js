import React from 'react';
import logo from '../media/logo.png';

function Header() {
  return (
    <div>
      <img src={logo} className="logo" alt="starwars name" />
    </div>
  )
}

export default Header
