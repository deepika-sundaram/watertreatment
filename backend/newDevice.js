const moment = require('moment');


function newDevice(dev_ID, devName, devBrand, devLocation, devTimeZone) {
    console.log(dev_ID, devName, devBrand, devLocation, devTimeZone);

    let result;
    var time = moment();
    var time_format = time.format('YYYY-MM-DD , HH:mm:ss');

    pool.query('INSERT INTO app.device_Details (device_id, device_name, manufacturer, place, timezone, created_at) VALUES ($1, $2, $3, $4, $5, $6)', [dev_ID, devName, devBrand, devLocation, devTimeZone, time_format], (error) => {
        if (error) {
            console.error(error.message);
        return result='other error'
        
        } else {
            return result={
                created: true
            };
        }
    });
}

module.exports = {
    newDevice
};