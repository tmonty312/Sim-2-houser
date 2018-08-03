 let house = require('./wizard')
 // [{
//     id: 1,
//     name: Family,
//     address: 3333,
//     city: Ogden,
//     state: UT,
//     zipcode: 84400
// }]

let id = 2

module.exports = {
    getHouse: (req, res) =>{
        res.status(200).send(house)
    },
    addHouse: (req,res) => {
        const {name, address, city, state, zipcode} = req.body

        const house1 = {
            id,
            name,
            address,
            city,
            state,
            zipcode
        }
        house.push(house1)
        id++
        res.status(200).send(house)
    },

    deleteHouse: (req, res) =>{
        const{id}= req.params
        let index= house.findIndex(s => s.id === +id)

        if(index!== -1){
            house.splice(index,1)
        }
        res.status(200).send(house)
    }

}