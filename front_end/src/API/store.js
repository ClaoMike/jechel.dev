import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from './reducers';

const store = configureStore({
    reducer: skillsReducer,
});

export default store;