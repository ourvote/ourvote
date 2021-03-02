import React from 'react';

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