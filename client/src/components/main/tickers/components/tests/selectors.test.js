import { assert } from "chai";
import * as selectors from '../../selectors';

const mockState = {
    serverData: {
        header: ['1', '2'],
        tickers: [{1:2}, {2:3}],
    }
};

describe('Tickers selectors', () => {
    it('getHeader', () => {
        assert.deepEqual(selectors.getHeader(mockState), ['1', '2']);
    });

    it('getTickers', () => {
        assert.deepEqual(selectors.getTickers(mockState),[{1:2}, {2:3}]);
    });
});
