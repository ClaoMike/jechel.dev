import { createSlice } from '@reduxjs/toolkit';

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const initialState = {
    value: darkModeMediaQuery.matches ? 'dark' : 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchToDark: (state) => {
        state.value = 'dark';
    },
    switchToLight: (state) => {
        state.value = 'light';
    },
    toggleTheme: (state) => {
      state.value = state.value === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { switchToDark, switchToLight, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
