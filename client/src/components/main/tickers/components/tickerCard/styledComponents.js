import styled from "styled-components";
import removeIcon from '../../../../../assets/img/delete-icon.svg'

export const Main = styled.div`
  border: ${props => props.isTickerActive ? '1px solid #66C8CA' : 'none'};
  border-radius: 5px;

  :nth-child(odd) {
    background-color: #0c202e;
  }
`
export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;

`
export const Item = styled.div`
  width: 20%;
  color: beige;
`
export const RemoveIcon = styled.div`
  width: 20px;
  height: 20px;
background-image: url(${removeIcon});
  cursor: pointer;
`
export const ItemColored = styled.div`
  width: 20%;
  color: ${props => props.isNegative ? '#2fc265' : '#d1193e'};
  position: relative;

  :before {
    content: '';
    width: 60px;
    height: 25px;
    position: absolute;
    opacity: 0.2;
    left: -4px;
    top: -4px;
    border-radius: 5px;
    background-color: ${props => props.isNegative ? '#2fc265' : '#d1193e'};
  }
`

