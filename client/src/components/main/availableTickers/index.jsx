import { connect } from "react-redux";
import * as selectors from './selectors';
import AvailableTickers from "./availableTickers";
import * as actions from "../tickers/actions";

export const mapStateToProps = state => ({
    removedTickers: selectors.getRemovedTickers(state)
});

export const mapDispatchToProps = (dispatch) => ({
    recoverTicker: payload => dispatch(actions.recoverTicker(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AvailableTickers);


