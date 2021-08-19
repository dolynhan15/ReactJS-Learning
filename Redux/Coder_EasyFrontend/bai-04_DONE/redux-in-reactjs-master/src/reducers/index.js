import hobbyReducer from "./hobby";
import userReducer from "./user";
import { combineReducers } from "redux";

//root reducer tong hop cac reducers
const rootReducer = combineReducers({
  hobby: hobbyReducer,
  user: userReducer,
});

export default rootReducer;