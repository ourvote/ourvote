import React, { useState } from 'react';
import ReactModalLogin from "react-modal-login";

import { facebookConfig, googleConfig } from "./social-config";

const LoginModal = () => {
  const [showModal, setshowModal] = useState(false);
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
    console.log("logged successfully with " + method);
  };

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