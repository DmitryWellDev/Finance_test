import { combineReducers } from 'redux';
import { serverData } from "./serverData/reducer/reducer";
import {tickers} from "./tickers/reducer/reducer";

export const rootReducer = combineReducers({ serverData, tickers });
