'use strict';

var mongoose = require('mongoose'),
  Chapter = mongoose.model('Chapters');

exports.list_all_chapters = (req, res) => {
  Chapter.find({}, (err, chapter) => {
    if (err)
      res.send(err);
    res.json(chapter);
  });
};


exports.create_a_chapter = (req, res) => {
  var new_chapter = new Chapter(req.body);
  new_chapter.save((err, chapter) => {
    if (err)
      res.send(err);
    res.json(chapter);
  });
};


exports.read_a_chapter = (req, res) => {
  Chapter.findById(req.params.chapterId, (err, chapter) => {
    if (err)
      res.send(err);
    res.json(chapter);
  });
};


exports.update_a_chapter = (req, res) => {
  Chapter.findOneAndUpdate({_id: req.params.chapterId}, req.body, {new: true}, (err, chapter) => {
    if (err)
      res.send(err);
    res.json(chapter);
  });
};


exports.delete_a_chapter = (req, res) => {
  Chapter.remove({
    _id: req.params.chapterId
  }, (err, chapter) => {
    if (err)
      res.send(err);
    res.json({ message: 'Chapter successfully deleted' });
  });
};
