import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage for web

import authReducer from "./authSlice/AuthSlice";
import toursReducer from "./tours/toursSlice";

// Combine all your reducers
const rootReducer = combineReducers({
  auth: authReducer,
  tours: toursReducer,
});

// Configuration for persistence
const persistConfig = {
  key: "root",
  storage,
};

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const store = configureStore({
  reducer: persistedReducer,
});
