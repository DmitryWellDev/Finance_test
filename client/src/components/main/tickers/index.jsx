import Tickers from "./Tickers";
import { connect } from "react-redux";
import * as selectors from './selectors';
import * as actions  from './actions';

export const mapStateToProps = state => ({
    tickers: selectors.getTickers(state),
    activeTicker: selectors.getActiveTicker(state),
    removedTickers: selectors.getRemovedTickers(state),
    updatedTickers: selectors.getUpdatedTickers(state)
});

export const mapDispatchToProps = (dispatch) => ({
    removeChosenTicker: payload => dispatch(actions.removeChosenTicker(payload)),
    setChosenTicker: payload => dispatch(actions.setChosenTicker(payload)),
    setTickerData:  payload => dispatch(actions.setTickerData(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tickers);


