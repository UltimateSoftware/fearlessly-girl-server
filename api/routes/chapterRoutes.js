'use strict';

module.exports = app => {
  var chapters = require('../controllers/chapterController');

  // chapter routes
  app.route('/chapters')
    .get(chapters.list_all_chapters)
    .post(chapters.create_a_chapter);


  app.route('/chapters/:chapterId')
    .get(chapters.read_a_chapter)
    .put(chapters.update_a_chapter)
    .delete(chapters.delete_a_chapter);
};