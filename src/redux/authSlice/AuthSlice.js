import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
// import Cookies from 'js-cookie';
// Async Thunk for login
export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }, { rejectWithValue }) => {
    try {
        const response = await axios.get("https://67ffac3db72e9cfaf7257b92.mockapi.io/signup");
        // const response = await axios.get("https://678a3b38dd587da7ac294985.mockapi.io/users");
        const data = response.data;
        const user = data.find((u) => u.email === email && u.password === password);

        if (!user) return rejectWithValue("Invalid email or password");

        const userData = {
            id: user.id,
            name: user.firstname + " " + user.lastname,
            email: user.email,
            role: user.role
        };

        // localStorage.setItem("user", JSON.stringify(userData));
        // Cookies.set('user', JSON.stringify(result.payload), { expires: 7 });
        return userData;

    } catch (error) {
        return rejectWithValue("Failed to connect to the server");
    }

});
// const getUserFromLocalStorage = () => {
//     if (typeof window !== "undefined") {
//         const user = localStorage.getItem("user");
//         console.log(typeof window, 'alwww')
//         return user ? JSON.parse(user) : null;
//     }
//     return null;
// };

// Initial state
const initialState = {
    user: null,
    loading: false,
    error: null,
};

// Create Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            // localStorage.removeItem("user");
            // Cookies.remove('user');
            state.user = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = payload;
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    }
});
// Export Actions & Reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;