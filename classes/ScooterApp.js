const Scooter = require("./Scooter.js");
const User = require("./User.js");

class ScooterApp {
  constructor(){
    this.stations = {
      "Station1": ['Lewisham'],
      "Station2": ['Brixton'],
      "Station3": ['Peckham']
    }
    this.registeredUsers = {}
  }
  registerUser(username,password,age){
    if(username != this.registeredUsers && age > 18){
      this.registeredUsers[username] = new User(username,password,age)
      console.log("User has been registered")
      return this.registeredUsers[username]
    }else if(username == this.registeredUsers){
      throw new Error("already registered")
    }else {
      throw new Error("too young to register")
    }
  }

  loginUser(username, password) {
    if (this.registeredUsers[username]) {
        let user = this.registeredUsers[username];
        user.login(password);
        console.log(`${username} has been logged in`);
    } else {
        throw new Error("Username or password is incorrect");
    }
}

logoutUser(username) {
    if (this.registeredUsers[username]) {
        let user = this.registeredUsers[username];
        user.logout();
        console.log(`${username} is logged out`);
    } else {
        throw new Error("No such user is logged in");
    }
}


//code below was created as a mix from me but generally from the help of the Atlas AI. 

createScooter(station) {
    if (this.stations[station]) {
        let scooter = new Scooter(station);
        this.stations[station].push(scooter);
        console.log("Created new scooter");
        return scooter;
    } else {
        throw new Error("No such station");
    }
}

dockScooter(scooter, station) {
    if (this.stations[station]) {
        if (!this.stations[station].includes(scooter)) {
            this.stations[station].push(scooter);
            scooter.dock(station);
            console.log("Scooter is docked");
        } else {
            throw new Error("Scooter already at station");
        }
    } else {
        throw new Error("No such station");
    }
}

rentScooter(scooter, user) {
    for (let station in this.stations) {
        let scooters = this.stations[station];
        if (scooters.includes(scooter)) {
            scooters.splice(scooters.indexOf(scooter), 1);
            scooter.rent(user);
            console.log("Scooter is rented");
            return;
        }
    }
    throw new Error("Scooter already rented");
}

print() {
    console.log("Registered Users:", Object.keys(this.registeredUsers));
    for (let station in this.stations) {
        console.log(`Station: ${station}, Scooters: ${this.stations[station].length}`);
    }
}
}

module.exports = ScooterApp;
