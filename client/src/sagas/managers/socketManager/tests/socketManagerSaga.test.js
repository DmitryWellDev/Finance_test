import { put, all, fork } from 'redux-saga/effects';
import { assert } from "chai";
import * as socketManagerSaga from '../socketManagerSaga';
import * as actions from "../actions";
import root from "../socketManagerSaga";


describe('socketManagerSaga', () => {
    describe('handleSetDataStore', () => {
        const tickers = [{ 1: 2 }, { 2: 3 }];
        const generator = socketManagerSaga.handleSetDataStore(tickers);

        it('should put setDataStore', () => {
            assert.deepEqual(generator.next().value, put(actions.setDataStore(tickers)));
        });

        it('should be finished', () => {
            assert.isTrue(generator.next().done);
        });
    });

    describe('root', () => {
        const generator = root();

        it('should all fork watchSocketChannel', () => {
            assert.deepEqual(generator.next().value, all( [fork(socketManagerSaga.watchSocketChannel)]));
        });

        it('should be finished', () => {
            assert.isTrue(generator.next().done);
        });
    });
});
