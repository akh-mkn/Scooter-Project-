class Scooter {
  static nextSerial = 1

  constructor(station){
    this.station = null
    this.user = null
    this.serial = scooter.nextSerial ++ 
    this.charge = 100 
    this.isBroken = false 
    this.station = station 
  }
  rent(user){
    if(this.charge < 20){
      throw Error('scooter needs to charge')
    }else if(this.charge > 20 && this.isBroken == false){
      throw Error('sccoter needs repair.')
    }else (this.charge > 20 && this.isBroken == false)
    this.user = user;
    this.station = null;
    console.log("Scooter rented to user");
  }
  dock(station){
    this.station = station 
    this.user = null 
    console.log("Scooter is docked");
  }
}

module.exports = Scooter;
