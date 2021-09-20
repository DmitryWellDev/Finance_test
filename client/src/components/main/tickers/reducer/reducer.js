import {tickersConstants} from '../actions'

export const tickersInitialState = {
    activeTicker: 'AAPL',
    removedTickers: [],
    tickerData: {
        // price: '',
        // change: '',
        // change_percent: '',
        // dividend: '',
        // lastTradeTime: ''
    }
};

export function tickers(state = tickersInitialState, action) {
    const { type, payload } = action;

    switch (type) {
        case tickersConstants.SET_CHOSEN_TICKER:
            return {
                ...state,
                activeTicker: payload
            };
        case tickersConstants.REMOVE_CHOSEN_TICKER:
            return {
                ...state,
                removedTickers: [...state.removedTickers, payload]
            };
        case tickersConstants.RECOVER_TICKER:
            return {
                ...state,
                removedTickers: state.removedTickers.filter(el => el !== payload)
            };
            case tickersConstants.SET_TICKER_DATA:
            return {
                ...state,
                tickerData: payload
            };
        default:
            return state;
    }
}

