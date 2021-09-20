import { all, call, fork, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as actions from "./actions";
import io from 'socket.io-client';
import constants from './constants';

export function createChannel(socket) {
    const subscribe = emitter => {
        socket.on(constants.events.TICKER, emitter);

        return () => socket.removeListener(constants.events.TICKER, emitter);
    }

    return eventChannel(subscribe);
}

export function* handleSetDataStore(tickers) {
    yield put(actions.setDataStore(tickers));
}

export function* watchSocketChannel() {
    let socket = null;

    socket = io(constants.URL);
    socket.emit(constants.events.START);

    const channel = yield call(createChannel, socket);

    while (true) {
        const tickers = yield take(channel);

        yield fork(handleSetDataStore, tickers);
    }
}

export default function* root() {
    yield all([
        fork(watchSocketChannel),
    ]);
}
