import React,{Component} from 'react'
import House from './House'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
 constructor(){
    super()
    this.state = {
      house: []
    }
}
 
render(){
        let houseMap = this.state.house.map(s => {
            return <House key={s.name} updateHouse={this.state.updateHouse} s={s}/>
         })

        return (
            <div>
                Dashboard
                <Link to="/wizard"><button>Add New Property</button></Link>
                 {/* <House/> */}
                {houseMap}
            </div>
        )
    }
}

