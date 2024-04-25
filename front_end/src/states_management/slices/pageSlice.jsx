import { createSlice } from '@reduxjs/toolkit';
import paths from '@paths/paths'

const initialState = {
    path: paths.home.path,
    tabIndex: paths.home.id
};

export const pageSlice = createSlice({
  name: 'paths',
  initialState,
  reducers: {
    home: (state) => {
        state.path = paths.home.path;
        state.tabIndex = paths.home.id
    },
    moto: (state) => {
        state.path = paths.moto.path;
        state.tabIndex = paths.moto.id
    },
    aboutMe: (state) => {
        state.path = paths.about_me.path;
        state.tabIndex = paths.about_me.id
    },
  },
});

export const { home, moto, aboutMe } = pageSlice.actions;

export default pageSlice.reducer;