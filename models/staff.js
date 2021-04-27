
const mongoose = require("mongoose")

const StaffSchema = mongoose.Schema(
    {
    name: {type: String},
    dob: {type: String},
    imageurl: {type: String},
    hobbies : {type: [String] }
    }
  )

  // Note for the moment we are storing the date as a string
  // rather than a date.
  // https://www.compose.com/articles/understanding-dates-in-compose-mongodb/
  
  let Staff = mongoose.model('Staff', StaffSchema);

  module.exports = Staff