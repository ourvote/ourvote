// import React, { useState } from 'react';
// import ReactModalLogin from "react-modal-login";

// // import { facebookConfig, googleConfig } from "./social-config";

// // const LoginModal = () => {
// //   const [showModal, setshowModal] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const openModal = () => {
// //     setshowModal(true);
// //   };

// //    const closeModal = () => {
// //      setshowModal(false);
// //      setError(null);
// //   };

// //   const onLoginSuccess = (method, response) => {
// //     console.log("logged successfully with " + method);
// //   };

// //   const onLoginFail = (method, response) => {
// //     console.log("logging failed with " + method);
// //      setError(response);
// //   };

// //   const startLoading = () => {
// //     setLoading(true);
// //   };

// //   const finishLoading = () => {
// //     setLoading(false);
// //   };

// //   const afterTabsChange = () => {
// //     setError(null);
// //   };

// //   return (
// //     <div>
// //       <button onClick={openModal}>Open Modal</button>

// //       <ReactModalLogin
// //         visible={showModal}
// //         onCloseModal={closeModal}
// //         loading={loading}
// //         error={error}
// //         tabs={{
// //           afterChange: afterTabsChange}}
// //         loginError={{
// //           label: "Couldn't sign in, please try again."
// //         }}
// //         registerError={{
// //           label: "Couldn't sign up, please try again."
// //         }}
// //         startLoading={startLoading}
// //         finishLoading={finishLoading}
// //         providers={{
// //           facebook: {
// //             config: facebookConfig,
// //             onLoginSuccess: onLoginSuccess,
// //             onLoginFail: onLoginFail,
// //             label: "Continue with Facebook"
// //           },
// //           google: {
// //             config: googleConfig,
// //             onLoginSuccess: onLoginSuccess,
// //             onLoginFail: onLoginFail,
// //             label: "Continue with Google"
// //           }
// //         }}
// //       />
// //     </div>
// //   )
// // }

// // export default LoginModal;

// // class LoginModal extends React.Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       showModal: false,
// //       loading: false,
// //       error: null
// //     };
// //   }



// //   render() {
// //     return (
// //       <div>
// //         <button onClick={() => this.openModal()}>Open Modal</button>

// //         <ReactModalLogin
// //           visible={this.state.showModal}
// //           onCloseModal={this.closeModal.bind(this)}
// //           loading={this.state.loading}
// //           error={this.state.error}
// //           tabs={{
// //             afterChange: this.afterTabsChange.bind(this)
// //           }}
// //           loginError={{
// //             label: "Couldn't sign in, please try again."
// //           }}
// //           registerError={{
// //             label: "Couldn't sign up, please try again."
// //           }}
// //           startLoading={this.startLoading.bind(this)}
// //           finishLoading={this.finishLoading.bind(this)}
// //           providers={{
// //             facebook: {
// //               config: facebookConfig,
// //               onLoginSuccess: this.onLoginSuccess.bind(this),
// //               onLoginFail: this.onLoginFail.bind(this),
// //               label: "Continue with Facebook"
// //             },
// //             google: {
// //               config: googleConfig,
// //               onLoginSuccess: this.onLoginSuccess.bind(this),
// //               onLoginFail: this.onLoginFail.bind(this),
// //               label: "Continue with Google"
// //             }
// //           }}
// //         />
// //       </div>
// //     );
// //   }
// // }


// class LoginModal extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showModal: false,
//       loading: false,
//       error: null
//     };
//   }

//   openModal() {
//     this.setState({
//       showModal: true
//     });
//   }

//   closeModal() {
//     this.setState({
//       showModal: false,
//       error: null
//     });
//   }

//   onLoginSuccess(method, response) {
//     console.log("logged successfully with " + method);
//   }

//   onLoginFail(method, response) {
//     console.log("logging failed with " + method);
//     this.setState({
//       error: response
//     });
//   }

//   startLoading() {
//     this.setState({
//       loading: true
//     });
//   }

//   finishLoading() {
//     this.setState({
//       loading: false
//     });
//   }

//   afterTabsChange() {
//     this.setState({
//       error: null
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.openModal()}>Open Modal</button>

//         <ReactModalLogin
//           visible={this.state.showModal}
//           onCloseModal={this.closeModal.bind(this)}
//           loading={this.state.loading}
//           error={this.state.error}
//           tabs={{
//             afterChange: this.afterTabsChange.bind(this)
//           }}
//           loginError={{
//             label: "Couldn't sign in, please try again."
//           }}
//           registerError={{
//             label: "Couldn't sign up, please try again."
//           }}
//           startLoading={this.startLoading.bind(this)}
//           finishLoading={this.finishLoading.bind(this)}
//           providers={{
//             facebook: {
//               config: facebookConfig,
//               onLoginSuccess: this.onLoginSuccess.bind(this),
//               onLoginFail: this.onLoginFail.bind(this),
//               label: "Continue with Facebook"
//             },
//             google: {
//               config: googleConfig,
//               onLoginSuccess: this.onLoginSuccess.bind(this),
//               onLoginFail: this.onLoginFail.bind(this),
//               label: "Continue with Google"
//             }
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default LoginModal;