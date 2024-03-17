const express = require('express');
const dotenv = require('dotenv');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
var moment = require('moment');
const { alert } = require('./emailAlert');
let {newDevice}=require('./newDevice')


dotenv.config();

const pool = new Pool({
  user: 'myuser',
  host: 'localhost',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432,
});

const app = express();
const port = process.env.PORT || 3000;


// Ignoring CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(bodyParser.json());
//login page-------------------------------------------------------------------------------------------------------------------------------------------------------
 app.get('/auth', (req, res) => {

  const username = req.query.username;
  const password = req.query.password;
  
  

  
  pool.query('SELECT count(*) FROM app.credentials where username = $1 and "password" = $2', [username, password], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows[0]);
  });

  
});
//view page-----------------------------------------------------------------------------------------------------------------------------------------------------
app.get('/view', (req,res) => {

  pool.query('SELECT * FROM app.data', (error, results) => {
   if (error) {
     throw error;
   }
   res.status(200).json(results.rows);
  // res.send(results.rows);
  
   
 });

});
//entering data fromIOT device ----------------------------------------------------------------------------------------------------------------------------------
app.post('/new_entry', (req, res) => {
  let temp_checking = false
  let ph_checking = false 
  let ch_checking = false
  const temp = req.body.temp;
  const ph = req.body.ph;
  const cc=req.body.cc;


  let id=uuidv4();
 var time = moment();
var time_format = time.format('YYYY-MM-DD , HH:mm:ss');
///first-check the  new entry is within the range specified by the admin------------------

pool.query('select * from app.normal_range  where id=(SELECT MAX(id) FROM app.normal_range)', (error, result) => {
  if (error) {
    console.error('Error executing query:', error);
    // Handle error here
  } 

  let  time= result.rows[0].event_timestamp;
  let min_temp= result.rows[0].temperature_minmum;
  let max_temp=result.rows[0].temperature_minmum;
  let min_ph=result.rows[0].ph_minmum;
  let max_ph=result.rows[0].ph_maximum;
  let min_ch=result.rows[0].chlorine_concentration_minmum;
  let max_ch=result.rows[0].chlorine_concentration_maximum;
  
  temp_checking=(temp<min_temp )||(temp>max_temp)
  ph_checking=(ph<min_ph)||(ph>max_ph)
  ch_checking=(cc<min_ch)||(cc>max_ch)

  console.log(temp_checking,ph_checking,ch_checking) 


  //sending alert when data is out of the range------------------------------------------
let arr=[temp,ph,cc];
  alert(temp_checking,ph_checking,ch_checking,arr)

}
)



    // Access the result here
  // second, insert the data into the database--------------------------------------------
  pool.query('INSERT INTO app.data (id,event_timestamp,temperature, ph, chlorine_concentration) VALUES ($1,$2,$3,$4,$5)', [id,time_format,temp,ph,cc], (error) => {
   
   if(error)
   {
    
      
  res.send({
          error:'other error'
        });
      
      console.error(error.message);
      
    } 
      // If the insertion was successful, send the response
   else  { res.send({
        "created": true
      });
    }
  });
});


///updating new range for monitoring--------------------------------------------------------------------------------------------------------------------------
app.post('/newRange', (req, res) => {
  const temp_min = req.body.temp_min;
  const temp_max = req.body.temp_max;
  const ph_min = req.body.ph_min;
  const ph_max = req.body.ph_max;
  const ch_min=req.body.ch_min;
  const ch_max=req.body.ch_max;



 var time = moment();
var time_format = time.format('YYYY-MM-DD , HH:mm:ss');
pool.query('SELECT MAX(id) FROM app.normal_range', (error, result) => {
  if (error) {
    console.error('Error executing query:', error);
    // Handle error here
  } else {
    // Access the result here

    const maxId =result.rows[0].max+ 1;
    pool.query('INSERT INTO app.normal_range (id,event_timestamp,temperature_minmum,temperature_maximum, ph_minmum,ph_maximum,chlorine_concentration_minmum,chlorine_concentration_maximum) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', [maxId,time_format,temp_min,temp_max,ph_min,ph_max,ch_min,ch_max], (error) => {
   
      if(error)
      {
       
         
     res.send({
             error:'other error'
           });
         
         console.error(error.message);
         
       } 
         // If the insertion was successful, send the response
      else  { res.send({
           "created": true
         });
       }
     });
    // You can use maxId here or do whatever you need with it
  }
});
  // First, insert the user into the database
  
});



app.post('/newDevice', (req, res) => {
  console.log(req.body.dev_ID);
 let dev_ID =req.body.dev_ID ;
let devName =req.body.devName ;
 let devBrand=req.body.devBrand;
let devLocation=req.body.devLocation;
let devTimeZone=req.body.devTimeZone;
var time = moment();
    var time_format = time.format('YYYY-MM-DD , HH:mm:ss');

    pool.query('INSERT INTO app.device_information (device_id, device_name, manufacturer, place, timezone, created_at) VALUES ($1, $2, $3, $4, $5, $6)', [dev_ID, devName, devBrand, devLocation, devTimeZone, time_format], (error) => {
        if (error) {
            console.error(error.message);
            res.send({
              error:'other error'
            });
        } else {
          res.send({
            "created": true
          });
        }
    });
// let result=newDevice(dev_ID,devName,devBrand,devLocation,devTimeZone);

// res.send(result);

 
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});