'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
  firstName: String,
  lastName: String,
  position: {
    type: String,
    enum: ['Advisor', 'Chair', 'Vice Chair', 'Treasurer'],
  },
  phoneNumber: String,
});

module.exports = mongoose.model('Members', MemberSchema);