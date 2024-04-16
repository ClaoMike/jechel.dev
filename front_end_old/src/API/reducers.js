import { combineReducers } from 'redux';
import { FETCH_SKILLS_REQUEST, FETCH_SKILLS_SUCCESS, FETCH_SKILLS_FAILURE } from './actions';

const initialState = {
  skills: [],
  loading: false,
  error: null
};

const skillsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SKILLS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_SKILLS_SUCCESS:
            return {
                ...state,
                loading: false,
                skills: action.payload,
                error: null
            };
        case FETCH_SKILLS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default combineReducers({ skills: skillsReducer });