import { assert } from "chai";
import * as selectors from '../selectors';

const mockState = {
    tickers: {
        removedTickers: ['AAPL', 'GOOGL', 'MSFT'],
    }
};

describe('Tickers selectors', () => {
    it('getHeader', () => {
        assert.deepEqual(selectors.getRemovedTickers(mockState), ['AAPL', 'GOOGL', 'MSFT']);
    });
});
