import React, { Component } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateUser extends Component {
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
               <div id="bleft">Left
               </div> <div id="logo"></div></div> 
               <div id="bright">Right</div>
               <div id="usercenter">
               <div id="center">
               <center>
               <div id="createaccount"> </div>

              
               <table width= "300px"  height= "100px">
                 <tr>

                <td id="left">
               <input id="firstname" type="text" className="validate"  placeholder="  FirstName"/><br/>
               <input id="email" type="email" className="validate"  placeholder="  E-mail" /><br/>


               <input id="companyname" type="text" className="validate"  placeholder="  Company name" /><br/>
               <p id="phonenumber"></p>

               

               <DropdownButton id="ex" title="Ex">
              <Dropdown.Item as="button">AF / AFG</Dropdown.Item>
               <Dropdown.Item as="button">AL / ALB</Dropdown.Item>
                  <Dropdown.Item as="button">AM / ARM</Dropdown.Item>
                   </DropdownButton>



                <input id="number" type="text" className="validate"   placeholder=" number" /><br/>

                <p id="mandatory"></p>

</td><td id ="right">

               <input id="lastname" type="text" className="validate"  placeholder=" Lastname"/><br/>


               <input id="role" type="text" className="validate"  placeholder=" Role" /><br/>

            

               


               <DropdownButton id="location" title=" ">
              <Dropdown.Item as="button">Afganistan</Dropdown.Item>
               <Dropdown.Item as="button">Albalia</Dropdown.Item>
                  <Dropdown.Item as="button">America</Dropdown.Item>
                   </DropdownButton><br/>

               <DropdownButton id="industry" title="">
              <Dropdown.Item as="button">Afganistan</Dropdown.Item>
               <Dropdown.Item as="button">Albalia</Dropdown.Item>
                  <Dropdown.Item as="button">America</Dropdown.Item>
                   </DropdownButton><br/>

               


</td>


</tr>
             </table>
             
              <button id="button1" color="white"><b>Create</b></button>
              
             </center>
               
               </div>
               
    
        
      </div>
         
    
      </div></div>
    )
  }
}

export default CreateUser
