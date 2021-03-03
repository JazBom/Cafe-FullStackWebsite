const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  _id: String,
  item: String,
  price: String,
  category:  String
});


// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('Menu', menuSchema);
