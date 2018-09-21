var validator = require('validator');

const mongoose = require('mongoose');

// Customer Schema
const CustomerSchema = mongoose.Schema({
  firstname: { type:String,
    validate:{
      validator: validator.isAlpha,
      message: '{VALUE} contains not only letters',
      isAsync: false
      }},
  lastname: { type:String,
    validate:{
      validator: validator.isAlpha,
      message: '{VALUE} contains not only letters',
      isAsync: false
      }},
  email: { type:String,
    validate:{
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email.',
      isAsync: false
    }},
    phonenumber1: { type:String,
    validate:{
      validator: validator.isMobilePhone,
      message: '{VALUE} is not a valid phone number.',
      isAsync: false
      }}, 
      phonenumber2: { type:String,
        validate:{
          validator: validator.isMobilePhone,
          message: '{VALUE} is not a valid phone number.',
          isAsync: false
          }}, 
  
  comment: { type: String }
});

// Define and export
module.exports = mongoose.model('Customer', CustomerSchema);
