import { createStore } from 'redux';
import skillsReducer from './reducers';

const store = createStore(skillsReducer);

export default store;