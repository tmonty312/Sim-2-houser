import React,{Component} from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'

export default class routes extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path= "/wizard"component={Wizard} />
                </Switch>
            </div>
        )
    }
}