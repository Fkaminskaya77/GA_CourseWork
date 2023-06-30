import mongoose from '../db/connections.js'
import characters from './characters.js';



const housesSchema = new mongoose.Schema({
    
    name: String,
    mascot: String,
    headOfHouse: String,
    houseGhost: String,
    founder: String,
    school: String,
    members: [{
        type: mongoose.ObjectId,
        type: mongoose.Types.ObjectId,
        ref: characters
    }],

    values: [{
        type: String
    }],
    colors: [{
        type: String
    }],
})

export default mongoose.model("house", housesSchema);


