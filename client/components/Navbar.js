import React from 'react';
import LoginModal from './LoginModal';

const Navbar = () => {
  return (
    <header className ='navbar'>
      <div className='left-nav'>
        <div className='nav-item'>
          <a><img id='logo' src='../assets/ourvote.png'/></a>
        </div>
        <div className='nav-item'>
          <h5><a>About Our Vote</a></h5>
        </div>
      </div>
      <div className='right-nav'>
          <LoginModal />
      </div>
    </header>
  )
}

export default Navbar;
