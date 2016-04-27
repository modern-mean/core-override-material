(function(app) {
  'use strict';

  app.registerModule('override', ['core', 'angularMoment']);
  app.registerModule('override.routes', ['core.routes']);

})(window.modernMeanApplication);
