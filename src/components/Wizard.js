import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Wizard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            address: '' ,
            city: '',
            state: '',
            zipcode: ''
        }
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }
    handleAddress = (e) => {
        this.setState({address: e.target.value})
    }
    handleCity = (e) => {
        this.setState({city: e.target.value})
    }
    handleState = (e) => {
        this.setState({state: e.target.value})
    }
    handleZipcode = (e) => {
        this.setState({zipcode: e.target.value})
    }
    addHouse= () => {
        const {name, address, city, state, zipcode} = this.state
        const newHouse = {name, address, city, state, zipcode}
        axios.post('/api/house', newHouse).then(results =>{
            this.props.newHouse(results.data)
        })
    }

    

    render() {
        return (
            <div>
                Wizard
               <Link to="/"><button>Cancel</button></Link>
               <input type= "text" placeholder= "Name" value={this.state.name} onChange={this.handleName}/>
                <input type= "text" placeholder= "Address" value={this.state.address} onChange={this.handleAddress}/>
                <input type= "text" placeholder= "City" value={this.state.city} onChange={this.handleCity}/>
                <input type= "text" placeholder= "State" value={this.state.state} onChange={this.handleState}/>
                <input type= "number" placeholder= "ZipCode" value={this.state.zipcode} onChange={this.handleZipcode}/>
                <Link to="/"><button  onClick={this.addHouse}>Complete</button></Link>
            </div>
        )
    }
}