import './admin.css'
export function Admin(){
  
    async function update(event)
    {
    event.preventDefault();
    console.log(event);
        
        const object={  temp_min :event.target[0].value,
temp_max :event.target[1].value,
            ph_min:event.target[2].value,
            ph_max:event.target[3].value,
            ch_min:event.target[4].value,
            ch_max:event.target[5].value

           }
        const response=await fetch("http://localhost:3000/newRange",{
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
        <div className="NormalRangeForm">
      <h3 id="title_normalRange">Enter new Monitoring range</h3>
        <form  onSubmit={update}>
        <label htmlFor="temperature">TEMPERATURE:</label>
        <input type="number" name="temp_min" placeholder="minvalue"  />
<input type="number" name="temp_max" placeholder="maxvalue"  />
<br/><br/>
  <label htmlFor="ph">PH:</label>
  <input type="number" name="ph_min" placeholder="minvalue"  />
<input type="number" name="ph_max" placeholder="maxvalue"  /><br/><br/>
  <label htmlFor="time"> CHLORINE CONCENTRATION:</label>
  <input type="number" name="ch_min" placeholder="minvalue"  />
<input type="number" name="ch_max" placeholder="maxvalue"  /><br/><br/>
            
          <input type="submit" id="NormalRangeSubmit"value="Submit" />
        </form>
       
       </div>
    )
}
