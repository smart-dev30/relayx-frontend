import { combineReducers } from 'redux';
import main from './main';
import finance from './finance';
import order from './order';

export default combineReducers({
  main,
  finance,
  order,
});