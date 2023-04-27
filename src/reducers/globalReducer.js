import { SET_CATEGORIES_ERROR } from '../utils/actions';

const globalReducer = (state, action) => {
  if (action.type === SET_CATEGORIES_ERROR) {
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default globalReducer;
