const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userDescription: {
    type: String,
    trim: true
  },
  userFirstName: {
    type: String,
    trim: true,
    required: true
  },
  userLastName: {
    type: String,
    trim: true,
    required: true
  },
  pseudo: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  passWord: {
    type: String,
    required: true
  },
  userAdresse: {
    type: String,
    trim: true
  },
  userCity: {
    type: String,
    trim: true,
    required: true
  },
  postalCode: {
    type: Number,
    required: true
  },
  userCIN: {
    type: String,
    required: true
  },
  userRating: {
    type: Number
  },
  userTrocNbre: {
    type: Number
  },
  userPhoto: {
    type: String,
    trim: true
  }
});

const TrocSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true
  },
  photo: {
    type: String,
    trim: true
  },
  typeO: {
    type: String,
    trim: true
  },
  typeS: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    trim: true
  },
  isValidated: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    trim: true,
    required: true
  },
  dateCreationTroc: {
    type: String,
    trim: true
  },
  vuesNbre: {
    type: Number
  },
  userid: {
    type: String,
    trim: true
  },
  userinfos: [userSchema]
});

const Troc = mongoose.model("troc", TrocSchema);

module.exports = { Troc };
