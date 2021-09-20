export const serverDataConstants = {
    SET_DATA_STORE: 'SET_DATA_STORE',
};

export const setDataStore = payload => ({ type: serverDataConstants.SET_DATA_STORE, payload });
