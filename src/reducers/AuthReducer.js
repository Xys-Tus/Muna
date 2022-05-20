const initialState = {
  user: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_USER":
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
