const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const path = require('path');
//const { OAuth2Client } = require('google-auth-library');
mongoose.connect("mongodb+srv://guangyu:123321@cluster0.5jl1k.mongodb.net/todolistDB", {useNewUrlParser: true});

// dotenv.config();
// const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);
//
// const app = express();
// app.use(express.json());
//
// const users = [];
//
// function upsert(array, item) {
//   const i = array.findIndex((_item) => _item.email === item.email);
//   if (i > -1) array[i] = item;
//   else array.push(item);
// }
googleId=''
router.post('/google-login', async (req, res) => {
  googleId  = req.body.googleId;
});

const noteSchema = {
  title: String,
  content: String,
  googleID: String,
  saveTime: String
};
const Note = mongoose.model("Note", noteSchema);
router.get('/initialize', (req, res) => {
  Note.find({'googleID':[googleId]}, function(err, foundItems){
    res.end(JSON.stringify(foundItems));
  });
});

router.post('/changeNote', async (req, res) => {
  Note.deleteMany({'googleID':[googleId]}, function(err){
    if(err){
      console.log(err);
    }
  });
  notes = req.body;

  Note.insertMany(notes, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully savevd changes to DB.");
    }
  });

    //res.end();
});


module.exports = router;
