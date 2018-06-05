'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddressSchema = new Schema({
  line1: String,
  line2: String,
  city: String,
  state: String,
  country: String
});

module.exports = mongoose.model('Address', AddressSchema);