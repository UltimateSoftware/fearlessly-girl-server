'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChapterSchema = new Schema({
  school: {
    type: String,
    required: true
  },
  location: {type: mongoose.Schema.Types.ObjectId, ref: 'Address'},
  members: {type: [mongoose.Schema.Types.ObjectId], ref: 'Members'},
  primaryContact1: {type: mongoose.Schema.Types.ObjectId, ref: 'Members'},
  primaryContact2: {type: mongoose.Schema.Types.ObjectId, ref: 'Members'},
  createdDate: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Chapters', ChapterSchema);