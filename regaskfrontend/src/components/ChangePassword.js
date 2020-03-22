import React, { Component } from 'react'
class ChangePassword extends Component {
  constructor() {
    super()
    this.state = {
    
    }
  }

  onSubmit(e) {
    e.preventDefault()

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
               
               <div id="bcenter" >
               <div id="center">
               <center>
               <div id="changepassword"> </div>

               
               <input id="temppassword" type="password" className="validate"  align="center"/><br/>

               <input id="newpassword" type="password" className="validate" /><br/>
              
               <input id="confirmpassword" type="password" className="validate" /><br/>
               <button id="button1">Update</button><br/></center>
               </div>
               
               </div>
    
      </div></div></div>
    )
  }
}

export default ChangePassword
