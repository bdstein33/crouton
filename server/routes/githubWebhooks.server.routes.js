(function(){
  'use strict';
  var posts = require('../controllers/posts.server.controller.js');

  module.exports = function(app) {
    /* Paramenters:
       Data returned:  */
    app.post('/github/postreceive', posts.postReceive);
  };

})();
