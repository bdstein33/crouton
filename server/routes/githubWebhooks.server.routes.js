(function(){
  'use strict';
  var posts = require('../controllers/posts.server.controller.js');

  module.exports = function(app) {
    /* Receives Github webhooks containing information on which posts have been added, edited and deleted. */
    app.post('/postreceive/github', posts.postReceive);
  };

})();
