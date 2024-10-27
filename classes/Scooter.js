const User = require("./User");

class Scooter extends User {

  constructor(station, user, serial, nextSerial = 1, charge = 100, isBroken = false){
    user = super(username)
    this.station = station
    nextSerial = serial
    this.charge = charge
    this.isBroken = isBroken
  }
}

module.exports = Scooter;
