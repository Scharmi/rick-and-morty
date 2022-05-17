const initState: any = new Set();

const favouritesReducer = (state = initState, action: any) => {
    
  switch (action.type) {
    case 'ADD_FAVOURITE': {
        const prevState = new Set(state);
        prevState.add(action.payload);
        return prevState;
    }
    case 'REMOVE_FAVOURITE': {
        const prevState = new Set   (state);
        prevState.delete(action.payload);
        return prevState;
    }
    default:
      return state;
  }
};

export default favouritesReducer;