const {constructURI} = require('../../URIMethods.js');

const civicKey = 'AIzaSyAxaluH_KPljnz_Sj2QjajtpS_iFSZbxJY';
let address = '68 White St 5th floor, New York, NY 10013' // Codesmith office 
// address = encodeCode(address);
const params = {
  key: civicKey,
  address: address
}
const paramString = constructURI(params);

// fetch('https://www.googleapis.com/civicinfo/v2/representatives?' + paramString)
//   .then(res => res.json())
//   .then(data => {
//     console.log('Result of fetch:', data);
//   })
//   .catch(err => console.error('Error querying Google Civic Info API.', err));