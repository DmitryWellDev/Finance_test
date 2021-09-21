import React from "react";
import { Main } from "./styledComponents";
import TickerCard from "./components/tickerCard/TickerCard";
import TickersHeader from "./components/header/TickersHader";

const Tickers = ({
    activeTicker,
    setTickerData,
    updatedTickers,
    setChosenTicker,
    removeChosenTicker,
}) => {

    const getTickerClick = (
        price,
        ticker,
        change,
        dividend,
        lastTradeTime,
        change_percent,
    ) => {

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

    const removeTicker = ticker => {
        removeChosenTicker(ticker)
    }

    return (
        <Main>
            <TickersHeader/>
                {updatedTickers.map((el, index) =>
                    <TickerCard
                        key={index}
                        price={el.price}
                        ticker={el.ticker}
                        change={el.change}
                        dividend={el.dividend}
                        handler={getTickerClick}
                        removeTicker={removeTicker}
                        activeTicker={activeTicker}
                        lastTradeTime={el.last_trade_time}
                        change_percent={el.change_percent}
                    />
                )}
        </Main>
    )
}

export default Tickers;
