import { createStore } from "redux";
import { combineReducers } from "redux";
import letters from "../modules/letters";

const root = combineReducers({ letters });
const store = createStore(root);

export default store;
