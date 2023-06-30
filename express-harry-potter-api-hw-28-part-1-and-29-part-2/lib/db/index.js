
import express from "express";
import houseRouter from "./Routes/houses.js";
const app = express()
 



//middleware
app.use(express.json())

//routes
app.get('/', async (req,res) => {
    res.send("Hello World!")
   
})

app.use('/', houseRouter)



//starting server
app.listen(3000, () => {
    console.log("your server is running on 3000!")
})

