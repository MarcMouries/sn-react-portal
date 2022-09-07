import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import { FocusStyleManager } from "@blueprintjs/core";
import { store } from "./Store/index";
import { StoreContext } from 'storeon/react'

FocusStyleManager.onlyShowFocusOnTabs();

axios.defaults.headers.put["Content-Type"] = "application/json";

if (process.env.NODE_ENV === "development") {
	const username = process.env.REACT_APP_USER;
	const password = process.env.REACT_APP_PASSWORD;
	axios.defaults.auth = {
		username,
		password,
	};
} else {
	axios.defaults.headers["X-userToken"] = window.servicenowUserToken;
}

ReactDOM.render(
	<StoreContext.Provider value={store}>
		<App />
	</StoreContext.Provider>,
	document.getElementById("root")
);
