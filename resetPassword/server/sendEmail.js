const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'anushkatiwari2031@gmail.com',
            pass:'gmmq thyw vdpy tsal'
        },
    });
    const mailOptions = {
        from:'anushkatiwari2031@gmail.com',
        to,
        subject,
        text
    };
    await transporter.sendMail(mailOptions);
}

module.exports = {sendEmail};

// const nodemailer = require('nodemailer');

// const sendEmail = async (to, subject, text) => {
//     const transporter = nodemailer.createTransport({
//         service:'Gmail',
//         auth:{
//             user:'ankit003322@gmail.com',
//             pass:'npor xixt rocc mleh'
//         },
//     });
//     const mailOptions = {
//         from:'ankit003322@gmail.com',
//         to,
//         subject,
//         text
//     };
//     await transporter.sendMail(mailOptions);
// }

// module.exports = {sendEmail};
