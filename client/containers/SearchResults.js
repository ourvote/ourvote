import React, { useState, useContext } from 'react';
import Politician from '../components/Politician';
import { HomeContext } from '../state/contexts';


const SearchResults = () => {
  const { homeState } = useContext(HomeContext);

  let politicians;
  if (!homeState.searchResults.length) politicians = (<h1>No Results Found</h1>)
  else {
    politicians = homeState.searchResults.map(person => {
      return <Politician key={person._id} photo={person.photo} name={person.name} office={person.office} division={person.division}
      party={person.party} webiste={person.website} phone={person.phone} email={person.email} />
    });
  }

  return  (
    <div className="politicianContainer">
      {politicians}
    </ div>
  )
}

export default SearchResults;