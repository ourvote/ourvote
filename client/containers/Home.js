import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import LoginModal from '../components/LoginModal';
import SearchBar from '../components/SearchBar';

const Home = () => {
// search bar is going to make a fetch request to the backend based on address
// 

  return (
    <>
      <Navbar />
      <SearchBar />
    </>
  )
}

export default Home;