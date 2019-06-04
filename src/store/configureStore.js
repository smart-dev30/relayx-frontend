import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../reducers/sagas';

const initialiseSagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
  applyMiddleware(initialiseSagaMiddleware)
);
initialiseSagaMiddleware.run(rootSaga);
export default store;