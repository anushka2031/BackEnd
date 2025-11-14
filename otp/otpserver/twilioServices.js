const twilio = require('twilio');
const accountSID = 'ACf4bd9a20adc6346642ee7a5bfccbbd02';
const authToken = '6d8afb7f35cf5cfdca60b8013f4416e6';

const client = new twilio(accountSID, authToken);

const sendOtp = (phoneNumber, otp) => {
    return client.messages.create({
        body: `Your OTP is ${otp}`,
        from: '+15755707372',
        to: phoneNumber
    });
};

module.exports = sendOtp;

// to see database in mongosh shell
// show dbs
// use database name