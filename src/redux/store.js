import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice/AuthSlice'
import toursReducer from './tours/toursSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    tours: toursReducer,
  }
})