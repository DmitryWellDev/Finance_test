export const tickersConstants = {
    RECOVER_TICKER: 'RECOVER_TICKER',
    SET_TICKER_DATA: 'SET_TICKER_DATA',
    SET_CHOSEN_TICKER: 'SET_CHOSEN_TICKER',
    REMOVE_CHOSEN_TICKER: 'REMOVE_CHOSEN_TICKER'
};

export const recoverTicker = payload => ({ type: tickersConstants.RECOVER_TICKER, payload });
export const setTickerData = payload => ({ type: tickersConstants.SET_TICKER_DATA, payload });
export const setChosenTicker = payload => ({ type: tickersConstants.SET_CHOSEN_TICKER, payload });
export const removeChosenTicker = payload => ({ type: tickersConstants.REMOVE_CHOSEN_TICKER, payload });
