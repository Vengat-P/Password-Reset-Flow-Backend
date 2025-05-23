import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

//create transporter for service
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth:{
        user:process.env.PASS_MAIL,
        pass:process.env.PASS_KEY
    }
});
//sendmail function in nodemailer
const sendEmail = async(to,subject,text)=>{
    const mailOptions = {
        from:process.env.PASS_MAIL,
        to,
        subject,
        text,
    }
    return transporter.sendMail(mailOptions)
}

export default sendEmail;