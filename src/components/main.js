import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Landing from './landingpage';
import Artists from './artists';
import Contact from './contact';
import  Search from './search';


const Main = () => (
    <Switch>
        <Route exact path = "/" component = {Landing} />
        <Route exact path = "/artists" component = {Artists} />
        <Route exact path = "/contact" component = {Contact} />
        <Route exact path = "/search" component = {Search} />

    </Switch>
)

export default Main;