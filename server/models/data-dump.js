const fetch = require('node-fetch');
const { constructURI, encodeCode } = require('../../URIMethods.js');

const civicKey = 'AIzaSyAxaluH_KPljnz_Sj2QjajtpS_iFSZbxJY';
let address = '68 White St 5th floor, New York, NY 10013' // Codesmith office 
encodedAddress = encodeCode(address);
const params = {
  key: civicKey,
  address: encodedAddress
}
const paramString = constructURI(params);

fetch('https://www.googleapis.com/civicinfo/v2/representatives?' + paramString)
  .then(res => res.json())
  .then(data => {
    console.log('Result of fetch:', data);
  })
  .catch(err => console.error('Error querying Google Civic Info API.', err));