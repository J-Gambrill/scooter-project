class User {
  constructor(username, password, age, loggedIn = false){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = loggedIn
  }

  logIn(password){
    if (password === this.password) {
      this.loggedIn = true
    } else {
      throw new Error('incorrect password')
    }
  }

  logOut(){
    this.loggedIn = false
  }


}

module.exports = User;
