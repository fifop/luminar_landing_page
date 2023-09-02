const express = require('express');
 const nodemailer= require('nodemailer')
 const bodyParser =require('body-parser')
 const cors = require('cors');  // Added this line for CORS


const app = express();

const PORT = 3001;
const router = express.Router();

app.use(cors());  // Added this line to use CORS


app.use(bodyParser.json());   //for prasing app
app.use(bodyParser.urlencoded({extended:true})); // For parsing application/x-www-form-urlencoded

// Serving your React build folder
app.use(express.static('https://cra.link/deployment'))



app.post('/send-email', async (req, res) => {
  const {email,name,subject} = req.body;

   // Setting up Nodemailer transporter (using Gmail for this example)
   const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
      user:'ofirperez29@gmail.com',
      password: 'gqjkreeofvfirwcs'
    }
   })

    // Email options
    const mailOptions = {
      from: 'YOUR_EMAIL@gmail.com',
      to: 'ofirperez29@gmail.com', 
      subject: subject ,
      text: `Email: ${email}, Name: ${name}`
  };

  try{
    await transporter.sendMail(mailOptions);
    res.status(200).send('email send successfully')

  }catch (error){
    console.error('Failed to send the email', error);
    res.status(500).send('Failed to send the email');
  }


});



app.listen(PORT,() =>{
  console.log(`Server is running on http://localhost:${PORT}`);
})


module.exports = router;

