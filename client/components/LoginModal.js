import React, { useState, useContext } from 'react';
import ReactModalLogin from "react-modal-login";
import {parseCode, encodeCode, constructURI} from "../../URIMethods"
import { facebookConfig, googleConfig } from "./social-config";
import { HomeContext } from '../state/contexts';

const LoginModal = () => {
  const { homeDispatch, homeState } = useContext(HomeContext);
  const [showModal, setshowModal] = useState(homeState.loggedIn);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const openModal = () => {
    setshowModal(true);
  };

  const closeModal = () => {
    setshowModal(false);
    setError(null);
  };

  const onLoginSuccess = (method, response) => {
    const userDbData = null;
    console.log("logged successfully with " + method);
    homeDispatch({
      type: 'CHANGE_LOGIN',
      payload: true
    });
    closeModal();
    const { access_token } = response;
    fetch('/users/google', {
      method: 'POST',
      body: JSON.stringify({
        access_token
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(data => data.json())
    .then(data => addUserToState(data))
    .catch(err => console.log('err: ', err))
  };

  const addUserToState = (userObj) => {
    homeDispatch({
      type: 'UPDATE_USER',
      payload: userObj
    });
    console.log('updated user');
  }

  const onLoginFail = (method, response) => {
    console.log("logging failed with " + method);
     setError(response);
  };

  const startLoading = () => {
    setLoading(true);
  };

  const finishLoading = () => {
    setLoading(false);
  };

  const afterTabsChange = () => {
    setError(null);
  };

  return (
    <div>
      <div className='nav-item'><h5><a onClick={openModal}>Login / Sign-up</a></h5></div>
      <ReactModalLogin
        visible={showModal}
        onCloseModal={closeModal}
        loading={loading}
        error={error}
        tabs={{
          afterChange: afterTabsChange}}
          loginError={{
          label: "Couldn't sign in, please try again."
        }}
        registerError={{
          label: "Couldn't sign up, please try again."
        }}
        startLoading={startLoading}
        finishLoading={finishLoading}
        providers={{
          facebook: {
            config: facebookConfig,
            onLoginSuccess: onLoginSuccess,
            onLoginFail: onLoginFail,
            label: "Continue with Facebook"
          },
          google: {
            config: googleConfig,
            onLoginSuccess: onLoginSuccess,
            onLoginFail: onLoginFail,
            label: "Continue with Google"
          }
        }}
      />
    </div>
  )
}

export default LoginModal;

    // console.log('res', response);
    // const platform = checkProvider(response);
    // const token = getToken(platform, response);
    // finalFetch(platform, token);

  // const checkProvider = (response) => {
  //   if(!response.authResponse) return response.idpId;
  //   else return response.authResponse.graphDomain;
  // }

  // const getToken = (platform, response) => {
  //   if(platform === 'facebook'){
  //     return response.authResponse.accessToken;
  //   } else if(platform === 'google') {
  //     return response.access_token;
  //   } else {
  //     console.log('user not authenticated by facebook or google in getToken')
  //   }  
  // }

  // const finalFetch = (platform, token) => {
  //   // check whether the response came from google or fb
  //   // https://cors-anywhere.herokuapp.com/
  //   const fbEndpoint = 'https://graph.facebook.com/debug_token?';
  //   const googleEndpoint = 'https://www.googleapis.com/auth/userinfo.profile';
  //   const fbOptions = {
  //     input_token: token,
  //     access_token: '468118507553575|20afc1e1e85ed9791581ae38926a7eb0'
  //   };
  //   const googleOptions = {
  //     headers: { 'Authorization': 'Bearer '+ token }
  //   }
  //   if (platform === 'google') {
  //     fetch(googleEndpoint, googleOptions)
  //     .then(data => data.text())
  //     .then(res => console.log('data fetched from google', res))
  //     .catch(err => console.log('error in addl fetch: ', err));
  //   } else if (platform === 'facebook') {
  //     fetch(fbEndpoint + constructURI(fbOptions))
  //     .then(data => data.text())
  //     .then(res => console.log('data fetched from facebook', res))
  //     .catch(err => console.log('error in addl fetch: ', err));
  //   } else {
  //     console.log('user not authenticated by google or facebook')
  //   }
  // }