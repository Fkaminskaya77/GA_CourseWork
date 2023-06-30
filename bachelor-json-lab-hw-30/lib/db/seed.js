

//import Models
const Bachelor = require('../models/Bachelor.js')
const Bachelorette = require('../models/Bachelorette.js')
const bachelorData = require('./bachelors.json')
const bacheloretteData = require('./bachelorettes.json')

Bachelor.remove({})
Bachelor.collection.insert(bachelorData)
  .then(bachelors => {
    console.log(bachelors)
  })
  .catch(err => {
    console.log(err)
})

Bachelorette.remove({})
Bachelorette.collection.insert(bacheloretteData)
  .then(bachelorettes => {
    console.log(bachelorettes)
  })
  .catch(err => {
    console.log(err)
})