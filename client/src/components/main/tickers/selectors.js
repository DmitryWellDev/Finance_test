import {createSelector} from "reselect";

export const getTickers = state => state.serverData.tickers;
export const getActiveTicker = state => state.tickers.activeTicker;
export const getRemovedTickers = state => state.tickers.removedTickers;

export const getUpdatedTickers= createSelector(
    getTickers,
    getRemovedTickers,
    (tickers, removedTickers) =>  tickers.filter(ticker => !removedTickers.includes(ticker.ticker))
);
