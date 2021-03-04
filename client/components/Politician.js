import React from 'react';

const Politician = ({ name, office, division, party, website, phone, email, photo }) => {
  let contactWebsite = (<div></div>);
  let contactPhone= (<div></div>);
  let contactEmail = (<div></div>);

  if (website) contactWebsite = (<h4 className="contact" ><span className='subheader'>Website:</span> &emsp; <a href={website}> {website}</a></h4>);
  if (phone) contactPhone = (<h4 className="contact" ><span className='subheader'>Phone:</span>  &emsp; &nbsp; &nbsp; {phone}</h4>);
  if (email) contactEmail = (<h4 className="contact" ><span className='subheader'>Email:</span> &emsp; &emsp; {email}</h4>);


  return (
    <div className='politician'>
      <div className='politicianImg'><img src={photo ? photo : '../assets/not-found.png'}/></div>
      <div className='politicianStats'>
        <h2 className="politicianName"><span className='header'>Name:</span> &emsp; &nbsp; {name}</h2>
        <h2 className="office" ><span className='header'>Office:</span> &ensp;  {office}</h2>
        <h3 className="division"><span className='subheader'>Division:</span> &emsp;  {division}</h3>
        <h3 className="party" ><span className='subheader'>Party:</span> &emsp; &emsp;  {party}</h3>
            {contactWebsite}
            {contactPhone}
            {contactEmail}
        <p>See this politician's <a href={`https://www.google.com/search?q=${name}%20scandals`} target="_blank" rel="noopener noreferrer">scandals</a> and <a href={`https://www.opensecrets.org/search?q=${name}`} target="_blank" rel="noopener noreferrer">donors</a>.</p>
      </div>
    </div>
  )
}

export default Politician;