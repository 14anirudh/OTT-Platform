import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import store from './store';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
    <BrowserRouter>
      <App />
      <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-center"
      getState={(state) => state.toastr} // This is the default
      transitionIn="bounceInDown"
      transitionOut="bounceOutUp"
      progressBar
      closeOnToastrClick/>
    </BrowserRouter>
  </Provider>
);


