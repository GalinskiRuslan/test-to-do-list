import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./Redux/toolkitSlice";

const rootReduser = combineReducers({
  toolkit: toolkitSlice,
});
export const store = configureStore({
  reducer: rootReduser,
});
