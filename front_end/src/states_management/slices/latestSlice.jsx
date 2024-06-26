import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    content: [],
    loading: true,
    error: null
};

export const latestSlice = createSlice({
  name: 'latest',
  initialState,
  reducers: {
    error: (state, action) => {
        state.content = []
        state.loading = false,
        state.error = action.payload
    },
    success: (state, action) => {
        state.content = action.payload,
        state.loading = false,
        state.error = null
    },
  },
});

export const { error, success } = latestSlice.actions;

export default latestSlice.reducer;
