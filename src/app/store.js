import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSyncExternalStore } from "react-redux";
// import orderReducer from "../features/order/orderSlice"
import authReducer from "../features/auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducer
});

export const store = configureStore({
  reducer: {
    reducer: rootReducer
  }
});
