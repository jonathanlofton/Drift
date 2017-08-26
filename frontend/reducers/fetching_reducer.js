export const START_FETCHING = 'START_FETCHING';

const defaultState = () => ({
  fetching: false
});

const FetchingReducer = (state = false, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_FETCHING:
      return true;
    default:
      return false;
  }
};

export default FetchingReducer;
