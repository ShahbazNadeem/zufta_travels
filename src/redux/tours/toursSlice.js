import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//fetch premium tours from backend
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

//fetch private tours from backend
export const fetchPrivateTours = createAsyncThunk(
    'tours/fetchPrivateTours',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                'http://192.168.100.177:45455/api/Tours/TourDetails?Category=2'
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

//fetch private tours from backend
export const fetchAirTours = createAsyncThunk(
    'tours/fetchAirTours',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                'http://192.168.100.177:45455/api/Tours/TourDetails?Category=3'
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


// Initial state
const initialState = {
    tours: [],
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
            // Premium Tours
            .addCase(fetchPremiumTours.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPremiumTours.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tours = action.payload;
            })
            .addCase(fetchPremiumTours.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // Private Tours
            .addCase(fetchPrivateTours.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPrivateTours.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tours = action.payload;
            })
            .addCase(fetchPrivateTours.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // Private Tours
            .addCase(fetchAirTours.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchAirTours.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tours = action.payload;
            })
            .addCase(fetchAirTours.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default toursSlice.reducer;
