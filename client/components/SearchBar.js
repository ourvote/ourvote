import React from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <div className="formContainer">
        <form className="form">
          <input className="formField" type="input" id="search" placeholder="Search With Zipcode..." />
          <input className="searchSubmit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default SearchBar;