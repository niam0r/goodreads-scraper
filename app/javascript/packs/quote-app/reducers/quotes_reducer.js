import { FETCH_QUOTES, REMOVE_QUOTE } from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_QUOTES:
      return action.payload;
    case REMOVE_QUOTE:
      return state.filter(quote => quote !== action.payload)
    default:
      return state;
  }
}
