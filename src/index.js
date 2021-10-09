import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/index.css';
import Main from './components/main';
import Settings from './components/settings';
import History from './components/history';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/settings" component={Settings} />
        <Route path="/history" component={History} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
