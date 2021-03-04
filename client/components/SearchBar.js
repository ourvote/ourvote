import React, { useState, useContext } from 'react';
import { HomeContext } from '../state/contexts';
const { constructURI, encodeCode } = require('../../URIMethods.js');

const SearchBar = () => {
  const { homeDispatch } = useContext(HomeContext);
  const [address, setAddress] = useState('');

  const onChange = (e) => {
    setAddress(e.target.value);
  }

  const onSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      e.preventDefault(); // prevent page refesh
    }

    // don't submit an empty string
    if (!address) return;
    const addressAscii = encodeCode(address);


    fetch('/politicians/?address=' + addressAscii, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(data => {
      homeDispatch({
        type: 'OPEN_SEARCH_RESULTS',
        payload: data
      });
      setAddress('');
    })
    .catch(err => console.error('ERROR getting politicians:', err));
  }

  return (
    <div className="searchBarContainer">
      <div className="formContainer">
        <form className="form"
        onSubmit={onSubmit}>
          <label className="label">
            <input className="formField"
            type="text"
            id="search"
            value={address}
            placeholder="Home address..."
            onChange={onChange} />
          </label>
          <a className="searchSubmit" onClick={onSubmit}><span>
            Find Your Reps
          </span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </form>
      </div>
    </div>
  )
}

export default SearchBar;