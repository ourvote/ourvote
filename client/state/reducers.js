export const initialHomeState = {
  aboutUs: true,
  searchResults: [],
  loggedIn: false,
  userData: {
    name: null, 
    address: null,
    regStatus: null,
    party: null,
    username: null,
    password: null,
  }
};  

export const homeReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_HOME_PAGE':
      return {
        ...state,
        aboutUs: true,
        searchResults: []
      }
    case 'OPEN_SEARCH_RESULTS':
     return {
       ...state,
      aboutUs: false,
      searchResults: action.payload
      }
    case 'CHANGE_LOGIN':
     return {
      ...state,
      loggedIn: action.payload
     }
    case 'UPDATE_USER':
      return {
        ...state,
        userData: action.payload
      }
  }
};