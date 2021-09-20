import React from "react";
import { Main, TitleItem } from './styledComponents'
import { headerTableRow } from '../../../../../constants/constants'


const TickersHeader = () => {

    return (
  <Main>
      {headerTableRow.map(el => <TitleItem>{el}</TitleItem>)}
  </Main>
    )
}

export default TickersHeader;


