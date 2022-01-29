const mongoose = require("mongoose");
const express = require("express");
const {urlencoded}=require ("express")
const app = express();
const port = process.env.PORT | 3001;
const cors=require ("cors");
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const fs=require("fs")
let path = require('path');


const { promisify } = require('util')

const unlinkAsync = promisify(fs.unlink)

const nodeMailer=require ('nodemailer')



app.use(express.json());
app.use(cors())
app.use(express.urlencoded());
app.use(express.static('images'));


//Server and DB connection

app.listen(port, () => {
  console.log(`Server is running at: ${port}`);
});

mongoose.connect("mongodb+srv://tushar:0ilMeEBKbwgFHPZj@tusharclusterone.smcfi.mongodb.net/D2D?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.log(e);
  });


 

//Registration useSchema

const userSchema = new mongoose.Schema({
  ename:String,
  number:String,
  service:String,
  location:String,
  category:String,
  photo:String
});
const user = new mongoose.model("Userdata", userSchema);

 //File-upload
 const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'images');
  },
 filename: function(req, file, cb) {   
      cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

let upload = multer({ storage, fileFilter });

app.route('/add').post(upload.single('photo'), (req, res) => {
const ename = req.body.ename;
const number = req.body.number;
const service = req.body.service;
const location = req.body.location;
const category = req.body.category;
const photo = req.file.filename;

console.log(photo)

const newUserData = {
  ename,
  number,
  service,
  location,
  category,
  photo
}

const newUser = new user(newUserData);

newUser.save()
       .then(() => res.redirect('http://localhost:3000/services'))
       .catch(err => res.status(400).json('Error: ' + err));
});


const userSchema1 = new mongoose.Schema({
  username:String,
  email:String,
  number:String,
  password:String
});
const userreg = new mongoose.model("Registration", userSchema1);

const adminSchema = new mongoose.Schema({
  username:String,
  password:String
});
const adminreg = new mongoose.model("Admin", adminSchema);



//Registration experts

app.post("/joinus", async (req, res) => {
  try {
    const usersave = new user({
      username: req.body.ename,
      number: req.body.number,
      service: req.body.service,
      location: req.body.location,
      category: req.body.category
    })

    const registered = await usersave.save();
    res.send("service updated");
  } catch (error) {
    res.status(400).send("Error occured");
  }
});

//experts fetch service page
app.get("/userdata" ,async(req,res,next)=>{
  try{
  const course= await user.find()
  res.status(200).send(course)
  }catch(err){
      res.status(500).send(err)

  }
})

app.get("/userreg" ,async(req,res,next)=>{
  try{
  const course= await userreg.find()
  res.status(200).send(course)
  }catch(err){
      res.status(500).send(err)

  }
})

//experts fetch homepage
app.get("/userdata8" ,async(req,res,next)=>{
  try{
  const course= await user.find().limit(4)
  res.status(200).send(course)
  }catch(err){
      res.status(500).send(err)

  }
})

//regsiter login function
app.post("/register", async (req, res) => {
  try {
    const usersave = new userreg({
      username: req.body.username,
      number: req.body.number,
      email: req.body.email,
      password: req.body.password
    })

    const registered = await usersave.save();
    res.send("registered");
  } catch (error) {
    res.status(400).send("Error occured");
  }
});

//login function
app.post("/login",async(req,res)=>{
  try{
       const username=req.body.username;
       const password=req.body.password;
       const usermail=await userreg.findOne({username: username})
       if(userreg){
       if(usermail.password===password ){
          res.status(200).send({message:"Login Successful", userreg:usermail})
         
       }else{
        res.send({message:"Incorrect password"})
       }
      }else{
        res.send({message:"Login failed"})
       }
  } 
  catch(error){
      res.status(400).send(error)
  }
           

});

//search function
app.get('/add', async(req, res, next) => {
  const data= await user.find()
    const filters = req.query;
    const filteredUsers = data.filter(user => {
      let isValid = true;
      for (key in filters) {
        console.log(user);
        isValid = isValid && user[key] == filters[key];
      }
      return isValid;
    });
    res.send(filteredUsers);
  })

  //image fetch
  app.get("/image", function(request, response) {
    response.render("images");
    console.log(response)
   });

   app.post("/adminlogin",async(req,res)=>{
    try{
         const username=req.body.username;
         const password=req.body.password;
         const usermail=await adminreg.findOne({username: username})
         if(adminreg){
         if(usermail.password===password ){
            res.status(200).send({message:"Login Successful", adminreg:usermail})
           
         }else{
          res.send({message:"Incorrect password"})
         }
        }else{
          res.send({message:"Login failed"})
         }
    } 
    catch(error){
        res.status(400).send(error)
        console.log(error)
    }
             
  
  });

   
   app.route('/deleteexpert/:id').delete((req, res, next) => {
     user.findByIdAndRemove(req.params.id, (error, data) => {
      unlinkAsync(`images/${data.photo}`)
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
          message: "Expert data deleted!",
        })
      }
    })
  })
   
  app.route('/updateexpert/:id').put((req, res, next) => {
    user.findById(req.params.id, function (err, user) {
      if (!user)
      return next(new Error('Unable To Find Employee With This Id'));
      else {
      user.ename = req.body.ename;
      user.number = req.body.number;
      user.service = req.body.service;
      user.location = req.body.location;
      user.category = req.body.category;
    
     
      
      user.save().then(
      res.status(200).send({message:"Expert data updated."})
      )
      .catch(err => {
      res.status(400).send({message:"Unable to update expert!"});
      });
      }
      });
  })

  //forgot-password function
app.post("/forgot",async(req,res)=>{
  try{
       const username=req.body.username;
       const email=req.body.email;
       const usermail=await userreg.findOne({username: username})
       if(userreg){
       if(usermail.email===email ){

        const transport= nodeMailer.createTransport({
          host:"smtp.gmail.com",
          port: 587,
          secure: false,
          require: true,
          rejectUnauthorized: false,
      
          auth:{
              user:"tusharmunnu@gmail.com",
              pass: "8864881056"
          }
      })
         //
         var mailOptions={
          from:"tusharmunnu@gmail.com",
          to:`${email}`,
          subject:"D2D login user password recovery:)",
          text:`Password associated with your D2D user account ${usermail.username} is ${usermail.password}. Please keep this password safe and scure... `
              }
          
              transport.sendMail(mailOptions, function(error,info){
                  if(error){
                      console.log(error)
                  }
                  else{
                     console.log("Message sent successfullly", info.response)
                     console.log()
            
                  }
              })
          res.status(200).send({message:`Password sent to ${email}`})
       }else{
        res.send({message:"Email not matched with D2D records!"})
       }
      }else{
        res.send({message:"Login failed"})
       }
  } 
  catch(error){
      res.status(400).send(error)
  }
           

});

 
  

  

