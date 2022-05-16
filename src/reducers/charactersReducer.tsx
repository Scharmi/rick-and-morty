

//Reducer for character information Initialize State
const initState: any = [];

//Define Actions
const charactersReducer = (state = initState, action: any) => {
    
  switch (action.type) {
    case 'FETCH_CHARACTERS_SUCCESS':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default charactersReducer;