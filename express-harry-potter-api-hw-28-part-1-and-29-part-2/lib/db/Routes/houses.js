import express from 'express'
import house from "../Model/houses.js";


const houseRouter = express.Router()
 

//house route for houses json data
houseRouter.get('/house', async (req, res) => {
    const House = await house.find({})
res.json(House)

})
//get house by id
houseRouter.get('/house/:id', async (req,res) => {
    const House = await house.findById(req.params.id)
    res.json(House)
})

//post
houseRouter.post('/house', async (req,res) => {
    const House = await house.create(req.body)
    res.json(House)
})

//find by id and update
houseRouter.put("/house/:id", async (req,res) => {
let House = await house.findByIdAndUpdate(
    req.params.id,
    { $set: req.body},
    {new: true}
    )
    res.json(House)
})
//deleting a house
houseRouter.delete('/house/:id', (req,res) =>{
    house.findByIdAndDelete( {_id: req.params.id})
        .then(House => {
            res.json(House)
        }
    )
}

)
export default houseRouter