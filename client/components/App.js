import React, {useEffect, useState} from 'react';

const App = () => {
  const [query, setQuery] = useState('{}');
  const civicKey = 'AIzaSyAxaluH_KPljnz_Sj2QjajtpS_iFSZbxJY';
  let address = '68 White St 5th floor, New York, NY 10013' // Codesmith office 
  address = encodeCode(address);
  const options = {
    key: civicKey,
    address: address
  }
  const paramString = constructURI(options);
  
  useEffect(() => {
    fetch('https://www.googleapis.com/civicinfo/v2/representatives?' + paramString)
      .then(res => res.json())
      .then(data => setQuery(data))
      .catch(err => console.error('Error querying Google Civic Info API.', err));
  }, []);

 return (
    <div>
      <h1>Hi from App!</h1>
      <p>API Call: {JSON.stringify(query)}</p>
    </div>
  )
}

export default App;