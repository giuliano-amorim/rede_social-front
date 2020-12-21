
const INITIAL_STATE = {
  profile: {}
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      state.profile = action.profile;
      return state;
    default:
      return state;
  }
};

export default reducer;
