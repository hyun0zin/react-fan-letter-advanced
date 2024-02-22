import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import letterSlice from "../modules/letterSlice";

const rootReducer = combineReducers({ letterSlice });

const store = configureStore({
  reducer: rootReducer,
});

export default store;
