const initState: any = [];

const charactersReducer = (state = initState, action: any) => {
    
  switch (action.type) {
    case 'FETCH_CHARACTERS_SUCCESS':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const downloadReducer = (state = false, action: any) => {
    
  switch (action.type) {
    case 'FETCH_CHARACTERS_SUCCESS':
      return true;
    default:
      return state;
  }
};

export default charactersReducer;
