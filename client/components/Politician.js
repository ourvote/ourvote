import React from 'react';

const Politician = ({ name, office, division, party, website, phone, email, photo }) => {
  return (
    <div className='politician'>
      <div className='politicianImg'><img src={photo}/></div>
      <div className='politicianStats'>
        <h2 className="politicianName">Name: {name}</h2>
        <h2 className="office" >Office: {office}</h2>
        <h2 className="division" >Division: {division}</h2>
        <h2 className="party" >Political Party: {party}</h2>
        <h2 className="website" >Website: <a src={website}>{website}</a></h2>
        <h2 className="phone" >Phone: {phone}</h2>
        <h2 className="email" >Email: {email}</h2>
      </div>
    </div>
  )
}

export default Politician;