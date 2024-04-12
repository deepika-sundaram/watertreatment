function alert(temp_checking,ph_checking,ch_checking,arr) {
  


    let m1=temp_checking?"abnormal":"normal";
    let m2=ph_checking?"abnormal":"normal";
    let m3=ch_checking?"abnormal":"normal"
    console.log(m1,m2,m3) 
//node mailer-----------------------------------------
    const nodemailer = require('nodemailer');

// Create a SMTP transporter object----------------------
let transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'sudharsanaviswanathan@gmail.com',
        pass: '2O0MWRmQzKVntA3b'
    }
});

// Setup email data with HTML content
let mailOptions = {
    from:'deepikasundaram6@gmail.com',
    to: 'deepikasundaram6@gmail.com',
    subject: 'ALERT!!!!',
    html: `
        <p style="font-size:16px;">Hello,</p>
        <p style="font-size:16px;">Temperature:${arr[0]}=>  <strong>${m1}</strong><br>PH:${arr[1]}=>  <strong>${m2}</strong><br>Chlorine concentration:${arr[2]}=>  <strong>${m3}</strong><br>.</p>
        <p style="font-size:16px;">Regards<br>Deepika.</p>
    `
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
    }
    console.log('Message sent: %s', info);
});
  
}


module.exports = {
    alert
};