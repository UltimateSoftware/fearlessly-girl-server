'use strict';

var mongoose = require('mongoose'),
  Chapter = mongoose.model('Chapters');

exports.list_all_chapters = function(req, res) {
  Chapter.find({}, function(err, chapter) {
    if (err)
      res.send(err);
    res.json(chapter);
  });
};


exports.create_a_chapter = function(req, res) {
  var new_chapter = new Chapter(req.body);
  new_chapter.save(function(err, chapter) {
    if (err)
      res.send(err);
    res.json(chapter);
  });
};


exports.read_a_chapter = function(req, res) {
  Chapter.findById(req.params.chapterId, function(err, chapter) {
    if (err)
      res.send(err);
    res.json(chapter);
  });
};


exports.update_a_chapter = function(req, res) {
  Chapter.findOneAndUpdate({_id: req.params.chapterId}, req.body, {new: true}, function(err, chapter) {
    if (err)
      res.send(err);
    res.json(chapter);
  });
};


exports.delete_a_chapter = function(req, res) {
  Chapter.remove({
    _id: req.params.chapterId
  }, function(err, chapter) {
    if (err)
      res.send(err);
    res.json({ message: 'Chapter successfully deleted' });
  });
};
