import React, { Component } from 'react'
import Logo from  './Logo.png'
class UserLogin extends Component {
  constructor(props) {
    super(props);
  
    this.onChangeUserName=this.onChangeUserName.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this)

    this.state={
      username:'',
      password:'',
    }
    }

   onChangeUserName(e) {
   this.setState({ 
     username:e.target.value

   })
 }
  onChangePassword(e) {
    this.setState({
      password:e.target.value
    }) 
    
  }

  onSubmit(e) {
    e.preventDefault()

     const newUser = {
      username: this.state.username,
      password: this.state.password,
    
     };console.log(newUser);
    
  }

  render() {
    return (
        <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        {/* Compiled and minified CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        {/* Compiled and minified JavaScript */}
        <link rel="stylesheet" href="ChangePassword.css" />
        <div class="containter">
    <div id="btable"> 
               <div id="bright">Right</div>
              <div id="bleft">Left
               </div> <div id="logo"></div>
               <div id="bcenter">
               <center>
               <div id="center"> 
               
<form onSubmit={this.onSubmit}>

    <div class="form-group">
            <div>  <input id="username" type="text" className="validate" placeholder="     Username"
            value={this.state.username}
            onChange={this.onChangeUserName}
            /><br/></div>
              <div><input id="password" type="password" className="validate"  placeholder="    Password"
              value={this.state.password}
               onChange={this.onChangePassword}
              /><br/></div></div></form>
              <button id="button1" type="submit"><b>Sign In</b></button></div>
               </center>
              </div>
              </div></div></div>
    )
  }
}

export default UserLogin
