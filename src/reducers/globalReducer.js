import {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  SET_USER,
} from '../utils/actions';

const globalReducer = (state, action) => {
  if (action.type === SET_USER) {
    return {
      ...state,
      user: action.payload,
    };
  }
  if (action.type === SET_LOADING_TRUE) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === SET_LOADING_FALSE) {
    return {
      ...state,
      loading: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default globalReducer;
