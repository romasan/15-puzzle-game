import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "@reducers";
import Main from "@containers/Main";

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.querySelector("#wrap")
);

module.hot.accept();
