import { assert } from "chai";
import { serverData } from '../reducer';

const mockState = {
    tickers: [{ 1: 2 }, { 2: 3 }]
};

describe('serverData reducer', () => {
    it('SET_DATA_STORE case', () => {
        const resultState = {
            tickers: [{ a: 1 }, { b: 2 }]
        };

        assert.deepEqual(serverData(mockState, { type: 'SET_DATA_STORE', payload: [{ a: 1 }, { b: 2 }] }), resultState);
    });
});
