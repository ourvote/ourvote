import React, { useContext } from 'react';
import LoginModal from './LoginModal';
import { HomeContext } from '../state/contexts';

const Navbar = () => {
  const { homeDispatch } = useContext(HomeContext);
  const returnHome = () => {
    homeDispatch({
      type: 'OPEN_HOME_PAGE',
      payload: {
        aboutUs: true,
        searchResults: []
      }
    })
  };

  return (
    <header className ='navbar'>
      <div className='left-nav'>
        <div className='nav-logo'>
          <a onClick={returnHome}><img id='logo' src='../assets/ourvote.png'/></a>
        </div>
        <div className='nav-item'>
          <h5><a href='#aboutUs'>About Our Vote</a></h5>
        </div>
      </div>
      <div className='right-nav'>
          <LoginModal />
      </div>
    </header>
  )
}

export default Navbar;
