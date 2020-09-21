import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../screen/home';
import Add from '../screen/Add';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/eventos" exact component={Add}/>
            <Route path="/eventos/:id" exact component={Add}/>
        </Switch>
        </BrowserRouter>
    )
}