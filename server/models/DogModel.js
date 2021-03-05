const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
//   _id: String,
  url: String
});


// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('Dog', dogSchema);
