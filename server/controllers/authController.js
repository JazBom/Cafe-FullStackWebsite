const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const bcrypt  = require('bcryptjs');

router.post('/login', async (req, res) => {

  // First query the database to see if the user exists
  try {

    const foundUser = await User.findOne({username: req.body.username});
    console.log(foundUser, ' foundUser');

     // If the user exists we'll use bcrypt to see if their password
  // is valid
  if(foundUser){

    // bcrypt compare returns true // or false
    if(bcrypt.compareSync(req.body.password, foundUser.password)){
       // if valid, we'll set the session
      req.session.userId = foundUser._id;
      req.session.username = foundUser.username;
      req.session.logged = true;

      res.redirect('/authors')

    } else {
      // send message back to client that
      // the username or password is incorrect
      req.session.message = 'Username or Password incorrect';
      res.redirect('/');
    }

  } else {
    // send message back to client that
    // thier username or password is incorrect
    req.session.message = 'Username or Password incorrect';
    res.redirect('/');

  }




  } catch(err){
    res.send(err);
  }

});


router.post('/register', async (req, res) => {

  // Encrypt our password
  const password = req.body.password;

  // encrypt our password
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  console.log(hashedPassword)

  req.body.password = hashedPassword;

  // We create our use
  try {
      const createdUser = await User.create(req.body);
      console.log(createdUser, ' created user');

      // set info on the session
      req.session.userId = createdUser._id;
      req.session.username = createdUser.username;
      req.session.logged = true;

      res.redirect('/authors');
  } catch (err){
    res.send(err)
  }

});


router.get('/logout', (req, res) => {

  req.session.destroy((err) => {
    if(err){
      res.send(err);
    } else {
      res.redirect('/');// back to the homepage
    }
  })

})



module.exports = router;
