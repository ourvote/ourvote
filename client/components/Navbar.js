import React, {useContext} from 'react';
import LoginModal from './LoginModal';
import UserProfile from './UserProfile';
import { HomeContext } from '../state/contexts';

const Navbar = () => {
  const { homeState, homeDispatch } = useContext(HomeContext);

  return (
    <header className ='navbar'>
      <div className='left-nav'>
        <div className='nav-logo'>
          <a><img id='logo' src='../assets/ourvote.png'/></a>
        </div>
        <div className='nav-item'>
          <h5><a>About Our Vote</a></h5>
        </div>
      </div>
      <div className='right-nav'>
          {homeState.loggedIn ? <UserProfile/> : <LoginModal />}
      </div>
    </header>
  )
}

export default Navbar;
