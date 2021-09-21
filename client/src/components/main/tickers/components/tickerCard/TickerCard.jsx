import React from "react";
import { Main, ItemWrapper, Item, ItemColored, RemoveIcon } from './styledComponents'

const TickerCard = ({
    price,
    ticker,
    change,
    handler,
    dividend,
    removeTicker,
    activeTicker,
    lastTradeTime,
    change_percent
}) => {
    const isNegative = change_percent >= 0;
    const isTickerActive = ticker === activeTicker;

    return (
        <Main
            onClick={() => handler(
                price,
                ticker,
                change,
                dividend,
                lastTradeTime,
                change_percent,
            )}
            isTickerActive={isTickerActive}
        >
            <ItemWrapper>
                <Item>
                    {ticker}
                </Item>
                <Item>
                    {price}
                </Item>
                <ItemColored
                    isNegative={isNegative}
                >
                    {`${change_percent}%`}
                </ItemColored>
                <ItemColored
                    isNegative={isNegative}
                >
                    {change}
                </ItemColored>
                <RemoveIcon
                    onClick={() => removeTicker(ticker)}
                />
            </ItemWrapper>
        </Main>
    )
}

export default TickerCard;
