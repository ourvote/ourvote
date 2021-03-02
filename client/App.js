import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';

const App = () => {
 return (
    <div>
      <h1>Hi from App!</h1>
      <p>API Call: {JSON.stringify(query)}</p>
      <Navbar />
    </div>
  )
}

export default App;
