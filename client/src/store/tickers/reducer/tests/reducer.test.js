import { assert } from "chai";
import { tickers } from '../reducer';

const mockState = {
    activeTicker: 'AAPL',
    removedTickers: ['GOOGL', 'AMZN'],
    tickerData: {
        "ticker": "AAPL",
        "price": 279.29,
        "change": 64.52,
        "change_percent": 0.84,
        "dividend": 0.56,
        "last_trade_time": "2021-04-30T11:53:21.000Z"
    }
};

describe('serverData tickers', () => {
    it('SET_DATA_STORE case', () => {
        const resultState = {
            ...mockState,
            activeTicker: 'FB'
        };
        assert.deepEqual(tickers(mockState, { type: 'SET_CHOSEN_TICKER', payload: 'FB'}), resultState);
    });

    it('REMOVE_CHOSEN_TICKER case', () => {
        const resultState = {
            ...mockState,
            removedTickers: ['GOOGL', 'AMZN', 'FB']
        };
        assert.deepEqual(tickers(mockState, { type: 'REMOVE_CHOSEN_TICKER', payload: 'FB'}), resultState);
    });

    it('RECOVER_TICKER case', () => {
        const resultState = {
            ...mockState,
            removedTickers: ['GOOGL','AMZN']
        };
        assert.deepEqual(tickers(mockState, { type: 'RECOVER_TICKER', payload: 'FB'}), resultState);
    });

    it('SET_TICKER_DATA case', () => {
        const resultState = {
            ...mockState,
            tickerData: {
                "ticker": "AAPL",
                "price": 179.29,
                "change": 44.52,
                "change_percent": 0.84,
                "dividend": 3.56,
                "last_trade_time": "2021-04-30T11:53:21.000Z"
            }
        };

        const payload = {
            "ticker": "AAPL",
            "price": 179.29,
            "change": 44.52,
            "change_percent": 0.84,
            "dividend": 3.56,
            "last_trade_time": "2021-04-30T11:53:21.000Z"
        }
        assert.deepEqual(tickers(mockState, { type: 'SET_TICKER_DATA', payload: payload}), resultState);
    });
});
