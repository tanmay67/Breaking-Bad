import { CHARACTER_LIST, SET_LOADING, CHARACTER_SEARCH_LIST } from '../Types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHARACTER_LIST:
      return {
        ...state,
        loading: false,
        chars: action.payload,
      };
    case CHARACTER_SEARCH_LIST:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    default:
      return state;
  }
};
