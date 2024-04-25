import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: true,
};

export const underscoreVisibilitySlice = createSlice({
  name: 'underscoreVisibility',
  initialState,
  reducers: {
    toggle: (state) => {
        state.value = !state.value;
    },
  },
});

export const { toggle } = underscoreVisibilitySlice.actions;

export default underscoreVisibilitySlice.reducer;