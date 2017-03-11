import React from 'react';
import { Route, IndexRoute } from 'react-router';

//Components
import App from './components/App';
import MainviewContainer from './containers/MainviewContainers/MainviewContainer.js';
// import Main from './components/Main';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={MainviewContainer}/>
    </Route>
);

