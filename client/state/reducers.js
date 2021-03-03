export const initialHomeState = {
  aboutUs: true,
  searchResults: [],
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
  }
};