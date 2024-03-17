import './addNewDevice.css'
export function AddNewDevice(){
  
    async function update(event)
    {
     event.preventDefault();

        
       const object={  
dev_ID :event.target[0].value,
devName :event.target[1].value,
devBrand:event.target[2].value,
devLocation :event.target[3].value,
devTimeZone:event.target[4].value
}
console.log(JSON.stringify(object));

     const response=await fetch("http://localhost:3000/newDevice",{
             method:"POST",
             headers:{
                'Content-Type':"application/json",
             },
           body:JSON.stringify(object)
        })

 let temp=response.json()
 console.log(temp);

    }




    return(
        <div className="AddNewDevice">
      <h3 id="title">ADD NEW DEVICE</h3>
        <form  onSubmit={update}>
<div className='DeviceID'>
        <label htmlFor="DeviceId">Device ID:</label> <br/>
  <input type="number" name="deviceid" />
  </div>
 
  <div className='DeviceName'>
        <label htmlFor="Device_name"> Device Name:</label>   <br/>
        <input type="text" name="DeviceName"  />
        </div>

     
  
        <div className='DeviceManufacturer'>
  <label htmlFor="ManufacturerLabel"> Manufacturer:</label><br/>
  <input type="text" name="manufacturer"  /></div>


  <div className='DeviceLocation'>
<label htmlFor="LocationLabel"> Location:</label><br/>
  <input type="text" name="Location"  /></div>

<div className='TimeZone'>
<label htmlFor="TimeZoneLabel"> TimeZone:</label>
 
  <select name="Timezone" id="Timezone">
  <option value="EST">EST</option>
  <option value="PST">PST</option>
  <option value="MST">MST</option>
  <option value="CST">CST</option>
  <option value="HST">HST</option>
</select>
</div>

 <input type="submit" id="NewDeviceSubmit"value="Submit" />
        </form>
       
       </div>
    )
}
