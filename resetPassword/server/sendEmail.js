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