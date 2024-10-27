class User {
  constructor(username, password, age){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = false
  }

  logIn(password){
    if (this.password !== password) throw new Error ('Incorrect password')
    this.loggedIn = true
    console.log('User logged in')
  }

  logOut(){
    this.loggedIn = false
    console.log('User logged out')
  }


}

module.exports = User;
