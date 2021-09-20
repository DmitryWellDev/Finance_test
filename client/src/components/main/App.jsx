import React from "react";
import { Main } from './styledComponents'
import Tickers from "./tickers";
import AvailableTickers from "./availableTickers/index";
import TickerData from "./tickerData/index";

const App = () => {

    return (
        <Main>
            <AvailableTickers/>
            <TickerData/>
            <Tickers/>
        </Main>
    );
}

export default App;
