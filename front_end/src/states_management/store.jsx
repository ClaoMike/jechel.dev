import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'
import websiteLoaderReducer from './slices/websiteLoadingSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    websiteLoader: websiteLoaderReducer,
  },
})