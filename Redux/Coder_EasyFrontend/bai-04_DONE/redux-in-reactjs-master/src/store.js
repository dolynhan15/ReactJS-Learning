import { createStore } from "redux";
import rootReducer from "./reducers";

//tao store tu root reducer
const store = createStore(rootReducer);
export default store;