import { createSlice } from '@reduxjs/toolkit'

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const initialState = {
    value: darkModeMediaQuery.matches ? 'dark' : 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchToDark: (state) => {
        state.value = 'dark'
    },
    switchToLight: (state) => {
        state.value = 'light'
    },
  },
})

export const { switchToDark, switchToLight } = themeSlice.actions

export default themeSlice.reducer