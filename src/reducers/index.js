import { combineReducers } from 'redux';
import main from './main';
import finance from './finance';

export default combineReducers({
  main,
  finance,
});