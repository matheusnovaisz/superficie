import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Start from './pages/Start';

const Routes = () => {
    return (
        <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route component={Start} path="/start" />
        </BrowserRouter>
    );
}

export default Routes;