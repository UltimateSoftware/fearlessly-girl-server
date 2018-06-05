'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChapterSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Chapters', ChapterSchema);