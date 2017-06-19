import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

//Layout
import MainContainer from './components/MainContainer';

//Pages
import Home from './components/Home'
import People from './components/People'



export default (
    <Router history={browserHistory}>
        <Route component={MainContainer}>
            <Route path="/" component={Home} />

            <Route path="people">
                    <IndexRoute component={People}/>
            </Route>
        </Route>
  </Router>
)
