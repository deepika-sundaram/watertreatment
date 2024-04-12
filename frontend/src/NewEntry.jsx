import { useState } from 'react';


export function NewEntry(props) {

    const [formValues, setFormValues] = useState({
        temperature: "",
        ph: "",
        cc: "",
        ec: ""
      });
      const [submitted, setSubmitted] = useState(false);
   
    async function newEntry(event)
    {
        event.preventDefault();
        
        const object={  temp :event.target[0].value,

            ph :event.target[1].value,
            cc:event.target[3].value,
            ec:event.target[2].value,
            createdBy:props.userName

           }
        const response=await fetch("http://localhost:3000/new_entry",{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:JSON.stringify(object)
        })

let result= await response.json();

if(result.created)
{
    setSubmitted(true)
}

setFormValues({
    temperature: "",
    ph: "",
    cc: "",
    ec: ""
  });
   
       

}

    







return (
         
  <form id="data" onSubmit={newEntry}>
  <label htmlFor="title" id="title_newEntry">Enter the current readings</label>

  <span className="temperature_entry"><label htmlFor="temperature">TEMPERATURE:</label>
  <input value= {formValues.temperature} type="number" id="temp" name="temp" placeholder="Enter Celsius temperature" onChange={(e) =>{
        setSubmitted(false)  ;  setFormValues({ ...formValues,temperature:e.target.value })}
          }/>
  </span>
  <span className="ph_entry"><label htmlFor="ph">PH:</label>
  <input value= {formValues.ph} type="number" id="ph_value" name="ph" onChange={(e) =>
            setFormValues({ ...formValues,ph:e.target.value })}/>  
  </span>
  <span className="salinity_entry">
 < label htmlFor="salinity">EC:</label>
  <input value={formValues.ec}type="number" id="salinity_value" name="salinity_value"  onChange={(e) =>
            setFormValues({ ...formValues,ec:e.target.value })}/>  </span>
  <span span className="cc_entry">
  <label htmlFor="time">CHLORINE_CONCENTRATION:</label>
  <input value={formValues.cc}type="number" id="con" name="con" onChange={(e) =>
            setFormValues({ ...formValues,cc:e.target.value })} />  </span>
       <input type="submit"  id="data_submit" value="Submit"/>
     
      { submitted?<p className="newEntrySubmitted"> Submitted successfully!</p>:<p></p>}
</form> 
    
    )
}