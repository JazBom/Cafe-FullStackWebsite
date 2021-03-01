const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});


// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('User', UserSchema);
