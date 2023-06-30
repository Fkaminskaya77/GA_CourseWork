

//get models
import character from "../Model/characters.js";
import house from "../Model/houses.js";
//import data from character and houses
import charactersdata from  "../characters.json" assert {type :"json"};
import housedata from "../houses.json" assert {type: "json"};


//insert our json data into the database with our model

async function seed() {
    await house.deleteMany({})
    await character.deleteMany({})
    
    await house.create(housedata)
    await character.create(charactersdata)  

 process.exit()
}
seed()
