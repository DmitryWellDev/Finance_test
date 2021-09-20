import socketSaga from './managers/socketManager/socketManagerSaga';
import { all } from 'redux-saga/effects';

export default function* watchRootSaga() {
    yield all([
        socketSaga(),
    ])
}
