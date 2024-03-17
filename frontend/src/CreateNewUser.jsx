import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './createNewUSer.css'

export function CreateUser()
{

    
  async function newUser(event)
    {
        event.preventDefault();
        let password=event.target[1].value;
        if(!(regex.test(password)))
        {
setFormatError(1);
        }

       else if(event.target[1].value=== event.target[2].value){
       const object={  newusername :event.target[0].value,

         newpassword :event.target[1].value
        }
        const response=await fetch("http://localhost:8000/newuser",{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:await JSON.stringify(object)
        })

console.log(response.json());
navigate('/home')}
else{
setMatchError(1);
}


    }
    return(
        <div className='newUser'>
            <div className="newuserForm">
          <p className="newUserPara">CREATE NEW USER</p>
        <form  className="newForm"  onSubmit={newUser}>
            <div className="UserID"> <label htmlFor="id">ID:</label><br></br>
         <input type="number"  id="id"/>
         </div>
        
       
         <div className="fistName"> <label htmlFor="FirstName">First Name:</label><br></br>
         <input type="text"  id="FirstName"/>
         </div>
         <div className="middleName"> <label htmlFor="MiddleName">Middle Name:</label><br></br>
         <input type="text"  id="MiddleName"/>
         </div>
         <div className="lastName"> <label htmlFor="LastName">Last Name:</label><br></br>
         <input type="text"  id="lastName"/>
         </div>
         <div className="workLocation"> <label htmlFor="WorkLocation">Work Location:</label><br></br>
         <input type="text"  id="workLocation"/></div>
         <div className="mobileNumber"> <label htmlFor="MobileNumber">Mobile Number:</label><br></br>
         <input type="number"  id="mobileNumber"/></div>
         <div className="emailID"> <label htmlFor="EmailID">Email:</label><br></br>
         <input type="email" id="email" name="email"/>
        </div>
         <div className='AccessType'>
<label htmlFor="AccessType"> Type Of Access</label><br></br>
 
  <select name="Type Of Access" id="accessType">
  <option value="Admin">Admin</option>
  <option value="User">User</option>
  <option value="Middle Management">Middle Management</option>
 
</select>
</div>
         

    
        <input id="newuserbutton" type="submit" value="Create user"/>
    
         </form></div></div>
    )
}