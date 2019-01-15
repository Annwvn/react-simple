import React from "react";
import ReactDOM from "react-dom";
import App from "view/app";
import {Provider} from "react-redux";
import store from "store/index";
import "common/css/common.css";

ReactDOM.render(
    <Provider store= {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);