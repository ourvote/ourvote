import React from 'react';

const Navbar = () => {
  return (
    <header className ='navbar'>
      <div className='left-nav'>
        <div className='nav-item'>
          <h5>Logo placeholder</h5>
        </div>
        <div className='nav-item'>
          <h5>About OurVote</h5>
        </div>
      </div>
      <div className='right-nav'>
        <div className='nav-item'>
          <h5>Register</h5>
        </div>
        <div className='nav-item'>
          <h5>Login</h5>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
