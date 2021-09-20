import { assert } from "chai";
import * as actions from '../actions';

describe('socket manager actions', () => {
    it('setDataStore', () => {
        assert.deepEqual(actions.setDataStore('test'),{ type: 'SET_DATA_STORE', payload: 'test' });
    });
});
