import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard';
import Header from './components/Header';
import Routes from './routes';
import axios from 'axios'


class App extends Component {
  constructor(){
    super()
    this.state = {
      house: []
    }
  }

  componentDidMount(){
    axios.get('/api/house').then(results => {
      this.setState({house: results.data})
    })
  }

  render() {
    return (
      <div className="App">
        <div>
      <Header/>
        </div>
        <div>
          <Route path="/" component={Dashboard} />
          <Route path="/wizard" component={Wizard} />
        </div>
      </div>
    );
  }
}

export default App;
