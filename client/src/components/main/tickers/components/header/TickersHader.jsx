import React from "react";
import { Main, TitleItem } from './styledComponents'
import { headerTableRow } from '../../../../../constants/constants'

const TickersHeader = () => {
    return (
        <Main>
            {headerTableRow.map((el) =>
                <TitleItem key={el}>
                  {el}
                </TitleItem>
            )}
        </Main>
    )
}

export default TickersHeader;
