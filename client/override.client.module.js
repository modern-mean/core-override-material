(function(app) {
  'use strict';

  app.registerModule('override', ['core']);
  app.registerModule('override.routes', ['core.routes']);

})(window.modernMeanApplication);
