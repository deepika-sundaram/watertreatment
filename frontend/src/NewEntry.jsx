import { useState } from 'react';

export function NewEntry() {
    async function newEntry(event)
    {
        event.preventDefault();
        
        const object={  temp :event.target[0].value,

            ph :event.target[1].value,
            cc:event.target[2].value

           }
        const response=await fetch("http://localhost:3000/new_entry",{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:JSON.stringify(object)
        })

console.log(response.json())
       
       

    }



return (
         
  <form id="data" onSubmit={newEntry}>
  <label htmlFor="title" id="title">ENTER THE CURRENT READINGS</label>
  <br></br>
  <label htmlFor="temperature">TEMPERATURE:</label>
  <input type="number" id="temp" name="temp" placeholder="Enter Celsius temperature"/>
<label htmlFor="ph">PH:</label>
  <input type="number" id="ph_value" name="ph"/>  

 < label htmlFor="salinity">SALINITY:</label>
  <input type="number" id="salinity_value" name="salinity_value"/>  
  <label htmlFor="time"> CHLORINE CONCENTRATION:</label>

  <input type="number" id="con" name="con" />  
  <input type="submit"  id="data_submit" value="Submit"/>
</form> 
    
    )
}