import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    password: '',
    allowSubmit: false
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateCredentials: (state, action) => {
        const { username, password } = action.payload;

        // Update the username if provided
        if (username !== undefined) {
            state.username = username;
        }

        // Update the password if provided
        if (password !== undefined) {
            state.password = password;
        }

        // Check if both username and password are not empty strings
        if (state.username.trim() !== '' && state.password.trim() !== '') {
            state.allowSubmit = true;
        } else {
            state.allowSubmit = false;
        }
    },
  },
});

export const { updateCredentials } = loginSlice.actions;

export default loginSlice.reducer;
