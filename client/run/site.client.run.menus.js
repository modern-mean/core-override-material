(function() {
  'use strict';

  // Setting HTML5 Location Mode
  angular
    .module('override.routes')
    .run(overrideMenu);

  overrideMenu.$inject = ['$state'];
  function overrideMenu($state) {
    var rootState = $state.get('root');
    rootState.views.leftnav.templateUrl = 'modern-mean-core-override-material/views/override.client.view.nav.left.html';

    //Override Header
    rootState.views.header.templateUrl = 'modern-mean-core-override-material/views/override.client.view.header.html';
    rootState.views.header.controller = 'OverrideHeaderController';
  }
})();
