import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import home from './pages/home';


const routes =
  (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={home} exact={true} />
          <Route path="/home" component={home} />

          <Route path="" component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
