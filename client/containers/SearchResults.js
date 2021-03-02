import React, { useState, useEffect } from 'react';
import Politician from '../components/Politician';

const dummyData = [{ 
  _id: 72,
  name: 'Kirsten E. Gillibrand',
  office: 'U.S. Senator',
  division: 'ocd-division/country:us/state:ny',
  party: 'Democratic Party',
  website: 'https://www.gillibrand.senate.gov/',
  phone: '(202) 224-4451',
  email: null,
  photo: 'http://bioguide.congress.gov/bioguide/photo/G/G000555.jpg',
 }, {
  _id: 73,
  name: 'Kirsten E. Gillibrand',
  office: 'U.S. Senator',
  division: 'ocd-division/country:us/state:ny',
  party: 'Democratic Party',
  website: 'https://www.gillibrand.senate.gov/',
  phone: '(202) 224-4451',
  email: null,
  photo: 'http://bioguide.congress.gov/bioguide/photo/G/G000555.jpg',
 }, {
  _id: 74,
  name: 'Kirsten E. Gillibrand',
  office: 'U.S. Senator',
  division: 'ocd-division/country:us/state:ny',
  party: 'Democratic Party',
  website: 'https://www.gillibrand.senate.gov/',
  phone: '(202) 224-4451',
  email: null,
  photo: 'http://bioguide.congress.gov/bioguide/photo/G/G000555.jpg',
 }];

const SearchResults = () => {
  
  const politicians = dummyData.map(person => {
    return <Politician key={person._id} photo={person.photo} name={person.name} office={person.office} division={person.division} 
                        party={person.party} webiste={person.website} phone={person.phone} email={person.email} />
  });

  return  (
    <>
      {politicians}
    </>
  )
}

export default SearchResults;