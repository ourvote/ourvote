import React from 'react';

const Politician = ({ name, office, division, party, website, phone, email, photo }) => {
  return (
    <div className='politician'>
      <div className='politicianImg'><img src={photo} alt='no image available'/></div>
      <div className='politicianStats'>
        <h2 className="politicianName">Name: {name}</h2>
        <h2 className="office" >Office: {office}</h2>
        <h3 className="division" >Division: {division}</h3>
        <h3 className="party" >Political Party: {party}</h3>
        <h4 className="contact" >Website: <a href={website}>{website || 'None provided'}</a></h4>
        <h4 className="contact" >Phone: {phone}</h4>
        <h4 className="contact" >Email: {email}</h4>
        <p>See this politician's <a href={`https://www.google.com/search?q=${name}%20scandals`} target="_blank" rel="noopener noreferrer">scandals</a> and <a href={`https://www.opensecrets.org/search?q=${name}`} target="_blank" rel="noopener noreferrer">donors</a>.</p>
      </div>
    </div>
  )
}

export default Politician;