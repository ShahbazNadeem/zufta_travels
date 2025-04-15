import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice/counterSlice';
import authReducer from './authSlice/AuthSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
})