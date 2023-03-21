const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path"); 

const oatModel = require("./models/oat.model");
const ccdModel = require("./models/ccd.model");
const rm_kdModel = require("./models/rm_kd.model");
const p_k_kelkar_libraryModel = require("./models/p_k_kelkar_library.model");
const nurseryModel = require("./models/nursery.model");
const pronite_groundModel = require("./models/pronite_ground.model");
const mama_mioModel = require("./models/mama_mio.model");
const hockey_groundModel = require("./models/hockey_ground.model");
const stadiumModel = require("./models/stadium.model");
const auditoriumModel = require("./models/auditorium.model");
const swimming_poolModel = require("./models/swimming_pool.model");
const mtModel = require("./models/mt.model");
const tennis_courtModel = require("./models/tennis_court.model");
const old_sacModel = require("./models/old_sac.model");
const new_sacModel = require("./models/new_sac.model");
const oxidation_pondModel = require("./models/oxidation_pond.model");
const outreachModel = require("./models/outreach.model");
const doaa_canteenModel = require("./models/doaa_canteen.model");
const flight_laboratoryModel = require("./models/flight_laboratory.model");
const park67Model = require("./models/park67.model");
const imageModel = require("./models/image.model");

app.use(express.json({limit: "10mb", extended: true}))
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))
// var bodyParser = require('body-parser');

// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

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
// Upload Image

app.post("/upload-image", async (req, res) => {
  // const { base64 } = req.body;
  
  try {
    const obj = {
      name: req.body.name,
      desc: req.body.desc,
      img: req.body.image,
    }
    
    if (req.body.location === "oat") {
      const item = await oatModel.create(obj);
  } else if (req.body.location === "ccd") {
      const item = await ccdModel.create(obj);
  } else if (req.body.location === "nursery") {
      const item = await nurseryModel.create(obj);
  } else if (req.body.location === "pronite_ground") {
      const item = await pronite_groundModel.create(obj);
  } else if (req.body.location === "mama_mio") {
      const item = await mama_mioModel.create(obj);
  } else if (req.body.location === "hockey_ground") {
      const item = await hockey_groundModel.create(obj);
  } else if (req.body.location === "stadium") {
      const item = await stadiumModel.create(obj);
  } else if (req.body.location === "swimming_pool") {
      const item = await swimming_poolModel.create(obj);
  } else if (req.body.location === "mt") {
      const item = await mtModel.create(obj);
  } else if (req.body.location === "auditorium") {
      const item = await auditoriumModel.create(obj);
  } else if (req.body.location === "tennis_court") {
      const item = await tennis_courtModel.create(obj);
  } else if (req.body.location === "old_sac") {
      const item = await old_sacModel.create(obj);
  } else if (req.body.location === "new_sac") {
      const item = await new_sacModel.create(obj);
  } else if (req.body.location === "oxidation_pond") {
      const item = await oxidation_pondModel.create(obj);
  } else if (req.body.location === "doaa_canteen") {
      const item = await doaa_canteenModel.create(obj);
  } else if (req.body.location === "outreach") {
      const item = await outreachModel.create(obj);
  } else if (req.body.location === "flight_laboratory") {
      const item = await flight_laboratoryModel.create(obj);
  } else if (req.body.location === "park67") {
      const item = await park67Model.create(obj);
  } else if (req.body.location === "p_k_kelkar_library") {
      const item = await p_k_kelkar_libraryModel.create(obj);
  } else if (req.body.location === "rm_kd") {
      const item = await rm_kdModel.create(obj);
  }
  console.log(obj.image);
  res.send({ Status: "ok" })

  } catch (error) {
    res.send({ Status: "error", data: error });

  }
})

app.listen(3000, ()=>{
    console.log("Server Started");
});
