import React from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// on form submit:
// send a GET request to '/politicians/' with the user-entered address concatenated on

const SearchBar = () => {
  const [address, setAddress] = useState('');

  const onChange = (e) => setAddress(e.target.value);

  const onSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      e.preventDefault(); // prevent page refesh
    }
    console.log('Form state:', address);
    // don't submit an empty string
    if (!address) return;

    const codesmith = '68 White St 5th floor, New York, NY 10013';

    fetch('/politicians/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: codesmith,
      })
    })

  }

  return (
    <div className="searchBarContainer">
      <div className="formContainer">
        <form className="form">
          <label>Find your representatives: 
            <input className="formField" 
            type="text" 
            id="search" 
            placeholder="Home address..."
            onChange={onChange} />
          </label>
          <button className="searchSubmit" onSubmit={onSubmit} />
        </form>
      </div>
    </div>
  )
}

export default SearchBar;