import React from 'react';
import { Route, IndexRoute } from 'react-router';

//Components
import App from './components/App';
import MainviewContainer from './containers/MainviewContainers/MainviewContainer';
import ProjectEditContainer from './containers/ProjectEditContainer/ProjectEditContainer';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={MainviewContainer}/>
        <Route path="/project/:id" component={ProjectEditContainer}/>
    </Route>
);

