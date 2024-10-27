class User {
  constructor(username, password, age ){
    this.username = username 
    this.password = password
    this.age = age 
    this.loggedIn = false
  }
  login(password){
    if(this.password === password){
      this.loggedIn = true
      console.log("User Logged In.")
    }else this.loggedIn = false
  }
  logout(){
    this.loggedIn = false 
    console.log('User logged out.')
  }
}

module.exports = User;
