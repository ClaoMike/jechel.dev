import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: true,
};

export const websiteLoaderSlice = createSlice({
  name: 'website loading',
  initialState,
  reducers: {
    doneLoading: (state) => {
        state.value = false;
    },
  },
});

export const { doneLoading } = websiteLoaderSlice.actions;

export default websiteLoaderSlice.reducer;
