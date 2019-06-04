import { USER_INIT, LOGOUT } from '../actions';
import { REQUEST, SUCCESS, FAILURE } from '../utils';

const INITIAL_STATE = {
  isFetching: false,
  error: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_INIT[REQUEST]:
      return { ...state, isFetching: true, error: null };

    case USER_INIT[SUCCESS]:
      console.log(action);
      debugger;
      return { ...state, isFetching: false, error: null };
    case USER_INIT[FAILURE]:
      return { ...state, isFetching: false, error: action.payload };

    case LOGOUT:
      localStorage.clear();
      return INITIAL_STATE;

    default:
      return state
  }
}