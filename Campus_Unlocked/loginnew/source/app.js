const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
const JWT_SECRET = "fghrgndcyhikljuhygrfvedcavkdbvabvahbvhsebkavdsvdvvhs";
const mongoUrl =
  "mongodb+srv://sathwik:reddy@cluster0.fs9rbc2.mongodb.net/?retryWrites=true&w=majority";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "iitkcampusunlocked@gmail.com",
    pass: "onwbcuupwvkuxbdw",
  },
  port : 465,
  host : "smtp.gmail.com"
});

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("UserInfo");

app.use(express.json());
app.use(cors());

// Register user
app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  if (!email.endsWith("@iitk.ac.in")) {
    return res.status(400).send({ status:'Invalidemail',error: "Invalid email domain" });
  }

  try {
    // Check if user already exists
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({ error: "User already exists" });
    }

    // Generate email verification token
    const token = randomstring.generate();

    // Create user with encrypted password and verification token
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      emailVerificationToken: token,
      isEmailVerified: false,
    });

    // Send verification email to user
    const mailOptions = {
      from: "iitkcampusunlocked@gmail.com",
      to: email,
      subject: "Email Verification",
      text: `Hi ${fname} ${lname},\n\nPlease click on the following link to verify your email address:\n\nhttp://localhost:3000/verify-email?token=${token}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent to ${email}: ${info.response}`);
      }
    });

    res.send({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
});

// Verify user's email
app.get("/verify-email", async (req, res) => {
  const { token } = req.query;
  try {
    // Find user with given verification token
    const user = await User.findOne({ emailVerificationToken: token });
    if (!user) {
      return res.send({ error: "Invalid verification token" });
    }

    // Update user's email verification status
    user.isEmailVerified = true;
    user.emailVerificationToken = null;
    await user.save();

    res.send({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
});
    
app.post("/login_user", async(req, res)=>{
    const {email, password}= req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.json({status:'user_notfound',error:"User not found"});
    }
    
    if(!user.isEmailVerified){
        return res.json({ status: 'email_not_verified',error:"Email not verified"});
    }
    
    if(await bcrypt.compare(password, user.password)){
        const token=jwt.sign({email:user.email},JWT_SECRET);
        
        if(res.status(201)){
            return res.json({status:"ok", data:token});
        }else{
            return res.json({error:"error", data:token});
        }
    }
    
    res.json({status:"error", error:"Invalid Password"});
});

app.listen(3000, ()=>{
    console.log("Server Started");
});
