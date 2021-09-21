import { assert } from "chai";
import * as selectors from '../selectors';
import {getTickerData} from "../selectors";

const mockState = {
     tickers: {
        tickerData: {
            "ticker": "AAPL",
            "price": 279.29,
            "change": 64.52,
            "change_percent": 0.84,
            "dividend": 0.56,
            "last_trade_time": "2021-04-30T11:53:21.000Z"
        }
    }
};

describe('Tickers selectors', () => {
    it('getHeader', () => {
        assert.deepEqual(selectors.getTickerData(mockState), {
            "ticker": "AAPL",
            "price": 279.29,
            "change": 64.52,
            "change_percent": 0.84,
            "dividend": 0.56,
            "last_trade_time": "2021-04-30T11:53:21.000Z"
        });
    });
});
