import React from 'react';
import HelpView from './HelpView';
import GridView from './GridView';
import CurrentPlaneView from './CurrentPlaneView';
import InitView from './InitView';
import {Route, Switch} from 'react-router-dom';

const Main = () => {

    return ( 
        <Switch>
            <Route exact path='/info' component={CurrentPlaneView} />
            <Route exact path='/grid' component={GridView} />
            <Route path='/help' component={HelpView} />
            <Route path='/' component={InitView} />
        </Switch>
     );
}
 
export default Main;