import { combineReducers } from 'redux';
import { serverData } from "./serverData/reducer/reducer";
import {tickers} from "../components/main/tickers/reducer/reducer";

export const rootReducer = combineReducers({ serverData, tickers });
