import { serverDataConstants } from '../../../sagas/managers/socketManager/actions';

export const serverDataInitialState = {
    tickers: [],
};

export function serverData(state = serverDataInitialState, action) {
    const { type, payload } = action;

    switch (type) {
        case serverDataConstants.SET_DATA_STORE:
            return {
                ...state,
                tickers: payload
            };
        default:
            return state;
    }
}

