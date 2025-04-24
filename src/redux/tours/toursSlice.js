import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch premium tours from backend
export const fetchPremiumTours = createAsyncThunk(
  'tours/fetchPremiumTours',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'http://192.168.100.177:45455/api/Tours/TourDetails?Category=1'
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


// Initial state
const initialState = {
  premiumTours: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Create slice
const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPremiumTours.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPremiumTours.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.premiumTours = action.payload;
      })
      .addCase(fetchPremiumTours.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default toursSlice.reducer;
