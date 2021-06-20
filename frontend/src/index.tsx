import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import history from 'myHistory';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'store/rootReducer';
import { Provider } from 'react-redux';

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
