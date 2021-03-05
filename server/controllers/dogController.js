const express = require('express');
// Next we set up the Router
const router = express.Router();
// require Our Model - Model is a representation of our data
const Dog = require('../models/DogModel');
// Creating the index route which should show all the items
router.get('/', async (req, res, next) => {
  // req.body this is from the fetch request
  console.log(req.body, 'this is an API GET-all request')
    try  {
      const allDog = await Dog.find();
      // This is the response to react
      res.json({
        status: {
            code: 200,
            message: "Success"
          },
        data: allDog
      });
    } catch (err){
      res.send(err)
    }
});
// add dog image route
router.post('/', async (req, res) => {
  try {
    console.log(req.body, 'this is REQUEST body');
    const createdDog = await Dog.create(req.body);
    console.log('RESPONSE happening?')
    res.json({
      status: {
            code: 201,
            message: "DOG IMAGE successfully created"
          },
      data: createdDog
    });
  } catch(err){
    console.log(err);
    // res.status(500);
    // res.json({ message : 'ERROR - Did not save to database - check ID is unique.'});
  }
});
// get dog image route
router.get('/:id', async (req, res, next) => {
    try  {
        const foundDog = await Dog.findById(req.params.id);
        res.json({
          status: {
            code: 200,
            message: "Success"
          },
          data: foundDog
        });
      } catch (err){
        res.send(err);
      }
});

// Delete route
router.delete('/:id', async (req, res) => {
  try {
    const deletedDog = await Dog.findByIdAndRemove(req.params.id);
      res.json({
        status:  {
            code: 200,
            message: "DOG IMAGE successfully deleted"
          },
        data: deletedDog
      });
  } catch(err){
    res.send(err);
  }
});

module.exports = router;
