 //let house = require('./wizard')
 // [{
//     id: 1,
//     name: Family,
//     address: 3333,
//     city: Ogden,
//     state: UT,
//     zipcode: 84400
// }]

//let id = 2

module.exports = {
    getHouse: (req, res) =>{
        const db = req.app.get('db')
        db.get_house().then(results =>{
            res.status(200).send(results)
        })
        .catch(err=> {
            console.log(err)
            res.status(500).send('Its not working')
        })
    },
    addHouse: (req,res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zipcode} = req.body
        const{id} = req.params

        db.add_house([name, address, city, state, zipcode, id]).then(results => {
            res.status(200).send(results)
        })
    },
    // updateHouse: (req.res) => {
    //     const db = req.app.get('db')
    //     let {id} = req.params
    //     let {name, address, city, state, zipcode} = req.query

    //     db.update_house([+name, address, city, state, zipcode, id]).then(results =>{
    //     res.status(200).send(results)
    //     })
    // },

    deleteHouse: (req, res) =>{
        let {id}= req.params
        let db = req.app.get('db')
        db.delete_house([id]).then(results => {
            res.status(200).send(results)
        })

//         let index= house.findIndex(s => s.id === +id)
// for(let i = 0; i< l
//         if(index!== -1){
//             house.splice(index,1)
//         }
//         res.status(200).send(house)
    }

}