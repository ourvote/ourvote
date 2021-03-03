import React, { useReducer, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import SearchResults from './SearchResults';
import AboutUs from './AboutUs';
import { HomeContext } from '../state/contexts';
import { initialHomeState, homeReducer } from '../state/reducers';
import {
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";


const Home = () => {
// search bar is going to make a fetch request to the backend based on address
// will need conditional render based on state => display search results if populated, else display about us

  const [homeState, homeDispatch] = useReducer(homeReducer, initialHomeState);

  console.log('HOMESTATE!', homeState)

  return (
    <HomeContext.Provider value = {{
      homeState,
      homeDispatch
    }}>
      <Navbar />
      <SearchBar />
        <div className='homeContents'>
         {homeState.aboutUs ? <AboutUs /> : <SearchResults /> }
       </div>
    </HomeContext.Provider>
  )
}

export default Home;


/*
 <Switch>
        <Route path="/" component={() => <AboutUs />} />
        <Route path="/searchResults" component={() => <SearchResults />} />
      </Switch>

*/