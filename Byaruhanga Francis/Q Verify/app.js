const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const multer = require('multer')
require("dotenv").config(); 

const User = require("./models/signupModel")

// Support parsing of application/json type post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const config = require("./config/dataBase");
const signupRoutes = require("./routes/signupRoutes");

app.use(session({
    secret: "secret", 
    resave: false,
    saveUninitialized: false
  }))

// * Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect(config.dataBase), {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}
const db = mongoose.connection;

//Confirming if db has connected
db.once("open", () => {
    console.log("DB is connected")
});

db.on("error", (err) => {
    console.log(err)
});

app.set("view engine","pug")
app.set("views", path.join(__dirname, "views"));

router.get("/",(req, res)=> {
    res.render("signup")
  }); 

app.use("/", signupRoutes);


app.get("*", (req,res)=>{
    res.status(404).send("Page does not exist")
})


  






















app.listen(4000, () => console.log("Listening on port 4000")); 