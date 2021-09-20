import React from "react";
import { Main, ItemWrapper, Item, ItemColored, RemoveIcon } from './styledComponents'

const TickerCard = ({ ticker, price, change, change_percent, handler, activeTicker, removeTicker, dividend, lastTradeTime }) => {
    const isNegative = change_percent >= 0;
    const isTickerActive = ticker === activeTicker

    return (
        <Main onClick={ () => handler(ticker, price, change, change_percent, dividend, lastTradeTime) } isTickerActive={isTickerActive}>
            <ItemWrapper>
                <Item>{ ticker }</Item>
                <Item>{ price }</Item>
                <ItemColored isNegative={ isNegative }>{ `${change_percent}%` }</ItemColored>
                <ItemColored isNegative={ isNegative }>{ change }</ItemColored>
                <RemoveIcon onClick={ () => removeTicker(ticker) }/>
            </ItemWrapper>
        </Main>
    )
}

export default TickerCard;
