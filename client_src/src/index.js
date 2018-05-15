import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import history from './history';
import Register from './Register';
import registerServiceWorker from './registerServiceWorker';
import Home from './Home';
import List from './List';

const Root = () => {
  return (
    <CookiesProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/home" component={Home}/>
          <Route path="/Register" component={Register}/>
          <Route path="/list" component={List}/>
        </Switch>
      </Router>
    </CookiesProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
