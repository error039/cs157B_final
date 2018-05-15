import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import history from './history';
import Register from './Register';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <CookiesProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/Register" component={Register}/>
        </Switch>
      </Router>
    </CookiesProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
