import React from "react";
import { Main } from "./styledComponents";
import TickerCard from "./components/tickerCard/TickerCard.component";
import TickersHeader from "./components/header/TickersHader";

const Tickers = ({ activeTicker, updatedTickers, removeChosenTicker, setChosenTicker, setTickerData }) => {

    const getTickerClick = (ticker, price, change, change_percent, dividend, lastTradeTime) => {
        const tickerData = {
            ticker: ticker,
            price: price,
            change: change,
            changePercent: change_percent,
            dividend: dividend,
            lastTradeTime: lastTradeTime
        }
        setChosenTicker(ticker)
        setTickerData(tickerData)
    }

    const removeTicker = (ticker) => {
        removeChosenTicker(ticker)
    }

    return (
        <Main>
            <TickersHeader/>
            {updatedTickers.map(el => <TickerCard
                                            price={ el.price }
                                            ticker={ el.ticker }
                                            change={ el.change }
                                            dividend={ el.dividend }
                                            handler={ getTickerClick }
                                            removeTicker={ removeTicker }
                                            activeTicker={ activeTicker }
                                            lastTradeTime={ el.last_trade_time }
                                            change_percent={ el.change_percent }
            />)}
        </Main>
    )
}

export default Tickers;
