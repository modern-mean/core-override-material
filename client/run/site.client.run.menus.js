(function() {
  'use strict';

  // Setting HTML5 Location Mode
  angular
    .module('site.routes')
    .run(coreMenu);

  coreMenu.$inject = ['$state'];
  function coreMenu($state) {
    var rootState = $state.get('root');
    rootState.views.leftnav.templateUrl = 'modules/site/client/views/site.client.view.nav.left.html';
    rootState.views.header.templateUrl = 'modules/site/client/views/site.client.view.header.html';
  }
})();
