import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import 'semantic-ui-css/semantic.min.css'
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Splash from '../src/components/Splash';



ReactDOM.render((
  <Router>
    <React.Fragment>

       <Route exact path="/" component={Splash} />
       <Route exact path="/ToDo" component={App} />

     </React.Fragment>
    </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
