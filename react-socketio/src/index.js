import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Game = lazy(() => import('./Game'));

ReactDOM.render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <React.StrictMode>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/game" component={Game}/>
      </Switch>
      </React.StrictMode>
    </Suspense>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
