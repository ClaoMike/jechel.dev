import { configureStore } from '@reduxjs/toolkit'

import themeReducer from './slices/themeSlice'
import websiteLoaderReducer from './slices/websiteLoaderSlice'
import underscoreVisibilityReducer from './slices/underscoreVisibilitySlice'
import loginReducer from './slices/loginSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    websiteLoader: websiteLoaderReducer,
    underscoreVisibility: underscoreVisibilityReducer,
    login: loginReducer,
  },
})