import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game1 from './Game1';
import Game2 from './Game2';


ReactDOM.render(

  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/Game1" component={Game1}/>
        <Route exact path="/Game2" component={Game2}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
