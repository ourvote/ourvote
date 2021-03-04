import React, { useContext } from 'react';
import LoginModal from './LoginModal';
import { HomeContext } from '../state/contexts';
import UserProfile from './UserProfile';

const Navbar = () => {
  const { homeDispatch, homeState } = useContext(HomeContext);
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
      </div>
      <div className='right-nav'>
          {homeState.loggedIn ? <UserProfile/> : <LoginModal />}
      </div>
    </header>
  )
}

export default Navbar;

/*
  <div className='nav-item'>
          <h5><a href='#aboutUs'>About Our Vote</a></h5>
        </div>

*/ 