import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import SearchResults from './SearchResults';
import AboutUs from './AboutUs';

const Home = () => {
// search bar is going to make a fetch request to the backend based on address
// will need conditional render based on state => display search results if populated, else display about us 

  return (
    <>
      <Navbar />
      <SearchBar />
      <SearchResults />
    </>
  )
}

export default Home;