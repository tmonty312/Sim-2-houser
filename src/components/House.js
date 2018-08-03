import React,{Component} from 'react'
import axios from 'axios'

export default class House extends Component{
    constructor(props){
        super(props)
        // console.log(props)
        this.state = {
            name: props.s.name,
            address: props.s.price ,
            city: props.s.city,
            state: props.s.state,
            zipcode: props.s.zipcode
        }
    }
   

    deleteHouse = (id) => {
        let {name, address, city, state, zipcode} = this.state
        let house = {name, address, city, state, zipcode}
        axios.delete('/api/house/'+id, house).then(results=> {
            this.props.updateHouse(results.data)
            this.setState({
                edit: false,
                name: '',
                address: '' ,
                city: '',
                state: '',
                zipcode: ''
            })
        })
    }

    
    render () {
        const { s } = this.props
        // console.log(this.props)

        return (
        <div>
            House
            <div>
            <button onClick={()=> this.deleteHouse(s.id)}>Remove</button>
            </div>

        </div>
    )
}
}