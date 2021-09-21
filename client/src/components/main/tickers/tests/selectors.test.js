import { assert } from "chai";
import * as selectors from '../selectors';

const mockState = {
    serverData: {
        tickers: [{1:2}, {2:3}],
    },
    tickers: {
        removedTickers: ['AAPL', 'GOOGL', 'MSFT'],
    }
};

describe('Tickers selectors', () => {
    it('getHeader', () => {
        assert.deepEqual(selectors.getRemovedTickers(mockState), ['AAPL', 'GOOGL', 'MSFT']);
    });

    it('getTickers', () => {
        assert.deepEqual(selectors.getTickers(mockState),[{1:2}, {2:3}]);
    });
});
