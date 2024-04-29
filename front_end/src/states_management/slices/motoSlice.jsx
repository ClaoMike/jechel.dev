import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    videos: [],
    loading: true,
    error: null
};

export const motoSlice = createSlice({
  name: 'moto',
  initialState,
  reducers: {
    error: (state, action) => {
        state.videos = [],
        state.loading = false,
        state.error = action.payload
    },
    success: (state, action) => {
        state.videos = action.payload,
        state.loading = false,
        state.error = null
    },
  },
});

export const { error, success } = motoSlice.actions;

export default motoSlice.reducer;
