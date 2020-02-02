import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './modules/store';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// WITH REACT ROUTER:
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import { Router, Route } from 'react-router-dom'

// import { App } from './App'
// import { Foo } from './Foo'
// import { Bar } from './Bar'
// import createStore from './createReduxStore'

// const store = createStore()

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <Route exact path="/" component={App} />
//       <Route path="/foo" component={Foo} />
//       <Route path="/bar" component={Bar} />
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// )