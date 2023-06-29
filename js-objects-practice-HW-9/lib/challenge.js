let ship = {
  name: 'Millennium Falcon',
  speed: 11,
  crew: ['Han Solo', 'Chewbacca'],
  passengers: [],
  famous: true,
  heardOfIt: function() {
    console.log("You've never heard of the millennium falcon!?");
    this.famous = false;
  },
  addPassenger: function(passenger) {
    this.passengers.push(passenger);
  },
  removePassenger: function(passenger) {
    let index = this.passengers.indexOf(passenger);
    this.passengers.splice(index, 1);
  }
};



// Console log the name
console.log(ship.name)

// Change the speed to 13
 ship.speed = 13


// Add 2 passengers, "Leia" and "Luke"
 ship.addPassenger("Leia")
 ship.addPassanger("Luke")
 console.log(ship)


// console log whether it's famous or not
console.log(ship.famous)

// Ask if you've heard of the millenium falcon
ship.heardOfIt $(ship[heardOfIt])


// console log if it's still famous
console.log(ship.famous)

// Remove Leia as a passengers
ship.removePassenger("Leia")
console.log(ship)


// Add a new property called "color" and set it equal to "beige"
ship.color = beige


// Add a new property called "missions" and set it equal to an empty object
ship.missions = {}
// Add 3 properties to "missions"
// kashyyk: true
ship.missions.kashyyk = true
// "escape-from-asteroid" : "scary"
ship.missions["escape-from-asteroid"] = "scary"

// "smuggled cargo": ['prisoners', 'stolen goods', 'unobtanium']

ship.missions ["smuggled cargo"] = ['prisoners', 'stolen goods', 'unobtanium']









