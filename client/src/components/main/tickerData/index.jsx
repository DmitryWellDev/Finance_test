import { connect } from "react-redux";
import * as selectors from './selectors';
import TickerData from "./TickerData";

export const mapStateToProps = state => ({
    tickerData: selectors.getTickerData(state),
});

export default connect(mapStateToProps)(TickerData);


