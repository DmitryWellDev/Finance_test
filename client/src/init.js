import {
    createStore,
    applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './store/rootReducer';
import watchRootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const configureStore = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchRootSaga)

export { configureStore };
