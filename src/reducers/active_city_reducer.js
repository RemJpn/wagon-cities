import cities from '../../data/cities';

const activeCityReducer = (state, action) => {
  if (state === undefined) {
    return cities[0];
  }

  debugger

  switch (action.type) {
    case 'SELECT_CITY':
      return action.payload;
    default:
      return state;
  }
};

export default activeCityReducer;
