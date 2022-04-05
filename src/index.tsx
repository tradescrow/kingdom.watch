import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./utils/reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import Theme from "./theme";
import { store } from "stateStore/store";
import { Provider } from "react-redux";

render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider theme={Theme}>
					<CssBaseline />
					<SnackbarProvider maxSnack={3}>
						<App />
					</SnackbarProvider>
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
