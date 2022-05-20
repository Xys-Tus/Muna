import { combineReducers } from "redux";
import picturesReducer from "./picturesReducer";
import detailReducer from "./photoDetailsReducer";
import AuthReducer from "./AuthReducer";
// We created a combinedReducer because we can not pass in more than 2 parameters in our store in index.js

const rootReducer = combineReducers({
  newUser: AuthReducer,
  pictures: picturesReducer,
  photoDetails: detailReducer,

  // this is where we add our reducers, more like states in our redux
});

export default rootReducer;
