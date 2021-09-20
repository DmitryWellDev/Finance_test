import React from "react";
import {Main, Title, Percent, Dividend, ItemName, DataWrapper, DataItem, TitleWrapper} from './styledComponents'
import moment from "moment";

const TickerData = ({tickerData}) => {
    const {
        ticker,
        changePercent,
        dividend,
        lastTradeTime
    } = tickerData

    const date = moment(lastTradeTime).format('LLL');


    return (
        <Main>
            <TitleWrapper>
                <Title>{ticker}</Title>
                {changePercent && <DataItem>{`${changePercent}%`}</DataItem>}
            </TitleWrapper>
            <DataWrapper>
                <DataItem>
                    {dividend && <ItemName>{'dividend:'}</ItemName>}
                    {dividend}
                </DataItem>
                <DataItem>{changePercent && date}</DataItem>
            </DataWrapper>
        </Main>
    );
}

export default TickerData;
