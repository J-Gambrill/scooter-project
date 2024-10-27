const Scooter = require("./Scooter.js");
const User = require("./User.js");

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {
      "Mayfair": [],
      "Westminster": [],
      "Docklands": []
    };

    this.registeredUsers = {}
  }

  registerUser(username, password, age){
    if (this.registeredUsers[username]) throw new Error('User already registered')
    if (age < 18) throw new Error('User is too young to register')
    const user = new User(username, password, age)
    this.registeredUsers[username] = user
    console.log('User registered')
    return user
    
  }


  loginUser(username,password) {
    const user = this.registeredUsers[username]
    if(!user) throw new Error("Username or password is incorrect")
    user.login(password)
    console.log('User logged in')
  }

  logoutUser(username) {
    const user = this.registeredUsers[username]
    if (!user || !user.loggedIn) throw new Error('No such user is logged in')
    user.logout()
    console.log('User logged out')
  }

  createScooter(station) {
    if (!this.stations[station]) throw new Error('No such station')
    const scooter = new Scooter(station)
    this.stations[station].push(scooter)
    console.log('Created new scooter')
    return scooter
  }

  dockScooter(scooter, station){
    if (!this.stations[station]) throw new Error('No such station')
    if (this.stations[station].includes(scooter)) throw new Error('Scooter already at station')
    scooter.dock(station)
    this.stations[station].push(scooter)
    console.log('Scooter is docked')
  }

  rentScooter(scooter, user) {
    if(scooter.user) throw new Error('Scooter already rented')
    scooter.rent(user)
    for (const station in this.stations) {
      const index = this.stations[station].indexof(scooter)
      if (index > -1) this.stations[station].splice(index, 1)
    }
    console.log('Scooter is rented')
  }

  print() {
    console.log('Registered Users:', Object.keys(this.registeredUsers))
    console.log('Stations and scooters:')
    for (const station in this.stations) {
   
      console.log(`${station}: ${this.stations[station].length} scooters`)
   
    }
  }
}



module.exports = ScooterApp;
