import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import App from './App';
import history from './history';
import Register from './components/Register';
import HomeLayout from './components/HomeLayout';
import Dashboard from './components/Dashboard';
import registerServiceWorker from './registerServiceWorker';
import Home from './Home';
import List from './List';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

const Root = () => {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomeLayout}/>
            <Route path="/Register" component={Register}/>
            <Route path="/Dashboard" component={Dashboard}/>
          </Switch>
        </Router>
      </Provider>
    </CookiesProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
