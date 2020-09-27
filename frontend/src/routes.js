import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';
import List from './pages/List';
import Reservations from './pages/Reservations'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={New} />
                <Route path="/list" component={List} />
                <Route path="/reservations" component={Reservations} />
            </Switch>
        </BrowserRouter>
    );
}