const express = require('express');
// Next we set up the Router
const router = express.Router();
// require Our Model - Model is a representation of our data
const Menu = require('../models/MenuModel');
// Creating the index route which should show all the items
router.get('/', async (req, res, next) => {
  // req.body this is from the fetch request
  console.log(req.body, 'this is GET-all')
    try  {
      const allMenu = await Menu.find();
      // This is the response to react
      res.json({
        status: {
            code: 200,
            message: "Success"
          },
        data: allMenu
      });
    } catch (err){
      res.send(err)
    }
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body, 'this is REQUEST body');
    const createdMenu = await Menu.create(req.body);
    console.log('RESPONSE happening?')
    res.json({
      status: {
            code: 201,
            message: "MENU ITEM successfully created"
          },
      data: createdMenu
    });
  } catch(err){
    console.log(err);
    res.send(err);
  }
});

router.get('/:id', async (req, res, next) => {
    try  {
        const foundMenu = await Menu.findById(req.params.id);
        res.json({
          status: {
            code: 200,
            message: "Success"
          },
          data: foundMenu
        });
      } catch (err){
        res.send(err);
      }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: {
            code: 201,
            message: "MENU or MENU ITEM successfully updated"
          },
      data: updatedMenu
    });
  } catch(err){
    res.send(err)
  }
});

// Delete route
router.delete('/:id', async (req, res) => {
  try {
    const deletedMenu = await Menu.findByIdAndRemove(req.params.id);
      res.json({
        status:  {
            code: 200,
            message: "MENU ITEM successfully deleted"
          },
        data: deletedMenu
      });
  } catch(err){
    res.send(err);
  }
});

module.exports = router;
