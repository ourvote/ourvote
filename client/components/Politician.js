import React from 'react';

const Politician = ({ name, office, division, party, website, phone, email, photo }) => {
  let contactWebsite = (<div> </div>);
  let contactPhone= (<div> </div>);
  let contactEmail = (<div> </div>);

  if (website) contactWebsite = (<h4 className="contact" >Website: <a href={website}>{website}</a></h4>);
  if (phone) contactPhone = (<h4 className="contact" >Phone: {phone}</h4>);
  if (email) contactEmail = (<h4 className="contact" >Email: {email}</h4>);


  return (
    <div className='politician'>
      <div className='politicianImg'><img src={photo ? photo : '../assets/not-found.png'}/></div>
      <div className='politicianStats'>
        <h2 className="politicianName">Name: {name}</h2>
        <h2 className="office" >Office: {office}</h2>
        <h3 className="division" >Division: {division}</h3>
        <h3 className="party" >Political Party: {party}</h3>
            {contactWebsite}
            {contactPhone}
            {contactEmail}
      </div>
    </div>
  )
}

export default Politician;