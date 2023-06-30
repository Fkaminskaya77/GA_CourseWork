import mongoose from '../db/connections.js';

const charactersSchema = new mongoose.Schema({
       
        name: String,
        role: String,
        house: String,
        school: String,
        ministryOfMagic: Boolean,
        orderOfThePhoenix: Boolean,
        dumbledoresArmy: Boolean,
        deathEater: Boolean,
        bloodStatus: String,
        species: String
})

 export default mongoose.model("character", charactersSchema);
