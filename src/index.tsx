import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {App} from "./components/App";
import {Provider} from "react-redux"
import {store} from "./store";
import ReactDOM from 'react-dom/client';


ReactDOM
    .createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <Provider store={store}>
            <App />
        </Provider>
    );
