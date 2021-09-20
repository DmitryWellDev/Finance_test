import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/main/App';
import { Provider } from "react-redux";
import { configureStore } from "./init";

ReactDOM.render(
    <Provider store={ configureStore }>
        <App/>
    </Provider>,
    document.getElementById('root')
);
