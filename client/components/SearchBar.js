import React, { useState, useContext } from 'react';
import { HomeContext } from '../state/contexts';

const SearchBar = () => {
  const { homeDispatch } = useContext(HomeContext);
  const [address, setAddress] = useState('');
  const [target, setTarget] = useState('');


  const onChange = (e) => {
    setAddress(e.target.value);
  }

  const onSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      e.preventDefault(); // prevent page refesh
    }

    // don't submit an empty string
    if (!address) return;

    fetch('/politicians/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address }),
    })
    .then(res => res.json())
    .then(data => {
      // console.log('Data from POST to /politicians:', data);
      setAddress('');
      homeDispatch({
        type: 'OPEN_SEARCH_RESULTS',
        payload: data
      });
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