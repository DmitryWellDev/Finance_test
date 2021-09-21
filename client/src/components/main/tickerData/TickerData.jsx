import React from "react";
import  {
    Main,
    Title,
    ItemName,
    DataItem,
    DataWrapper,
    TitleWrapper,
} from './styledComponents'
import moment from "moment";

const TickerData = ({ tickerData }) => {
    const {
        ticker,
        dividend,
        changePercent,
        lastTradeTime
    } = tickerData;

    const date = moment(lastTradeTime).format('LLL');

    return (
        <Main>
            <TitleWrapper>
                <Title>
                    {ticker}
                </Title>
                    {changePercent &&
                        <DataItem>
                            {`${changePercent}%`}
                        </DataItem>
                    }
            </TitleWrapper>
            <DataWrapper>
                <DataItem>
                    {dividend &&
                        <ItemName>
                            {'dividend:'}
                        </ItemName>
                    }
                    {dividend}
                </DataItem>
                <DataItem>
                    {changePercent && date}
                </DataItem>
            </DataWrapper>
        </Main>
    );
}

export default TickerData;
