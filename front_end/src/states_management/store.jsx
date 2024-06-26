import { configureStore } from '@reduxjs/toolkit'

import themeReducer from '@slices/themeSlice'
import websiteLoaderReducer from '@slices/websiteLoaderSlice'
import underscoreVisibilityReducer from '@slices/underscoreVisibilitySlice'
import loginReducer from '@slices/loginSlice'
import pageSlice from '@slices/pageSlice'
import motoSlice from '@slices/motoSlice'
import latestSlice from './slices/latestSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    websiteLoader: websiteLoaderReducer,
    underscoreVisibility: underscoreVisibilityReducer,
    login: loginReducer,
    page: pageSlice,
    moto: motoSlice,
    latest: latestSlice,
  },
})