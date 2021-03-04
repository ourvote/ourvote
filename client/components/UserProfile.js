import React, {useContext, useState} from 'react';
import { HomeContext } from '../state/contexts';

const UserProfile = () => {
  const { homeDispatch, homeState } = useContext(HomeContext);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [status, setStatus] = useState(null);
  const [party, setParty] = useState(null);
  const [userData, setData] = useState({
    name: homeState.userData.name,
    address: homeState.userData.address,
    regStatus: homeState.userData.regStatus,
    party: homeState.userData.party,
    username: homeState.userData.username,
    password: homeState.userData.password,
  })

  function logOut(){
    homeDispatch({
      type: 'CHANGE_LOGIN',
      payload: false
    });
  } 

  function handleName(e){
    setName(e.target.value);
  }
  function handleAddress(e){
    setAddress(e.target.value);
  }
  function handleStatus(e){
    setStatus(e.target.value);
  }
  function handleParty(e){
    setParty(e.target.value);
  }

  function submitData(){
    const tempData = userData;
    tempData.name = name;
    tempData.address = address;
    tempData.regStatus = status;
    tempData.party = party;
    setData(tempData);
    homeDispatch({
      type: 'UPDATE_USER',
      payload: tempData
    });
  }

  return (
    <div id="userInfo">
      <form id="userName">
        <label>
          Name:
          {homeState.userData.name ? 
           homeState.userData.name : 
          <input type="text" name="name" placeholder="your name" onChange = {handleName}></input>}
          <button id="saveName" onClick = {submitData}> Save </button>
        </label>
      </form>
      <form id="userAddress">
        <label>
          Address:
          {homeState.userData.address ? homeState.userData.address : <input type="text" name="address" placeholder="your address" onChange = {handleAddress}></input>}
          <button id="saveAddress" onClick={submitData}> Save </button>
        </label>
      </form>
      <form id="userStatus">
        <label>
          Registration:
          {homeState.userData.regStatus ? homeState.userData.regStatus : <input type="text" name="regStatus" placeholder="your voter registration status" onChange = {handleStatus}></input>}
          <button id="saveStatus" onClick={submitData}> Save </button>
        </label>
      </form>
      <form id="userParty">
        <label>
          Party:
          {homeState.userData.party ? homeState.userData.party : <input type="text" name="regStatus" placeholder="the party you're registered for" onChange = {handleParty}></input>}
          <button id="saveParty" onClick={submitData}> Save </button>
        </label>
      </form>
      <button id="saveAll" onClick={submitData}>
        Save All
      </button>
      <button id="logOut" onClick={logOut}>
        Log Out
      </button>
    </div>
  )
}

export default UserProfile;
