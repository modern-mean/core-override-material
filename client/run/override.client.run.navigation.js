(function() {
  'use strict';

  angular
    .module('override.routes')
    .run(navigationConfig);

  navigationConfig.$inject = ['$state', '$log'];
  function navigationConfig($state, $log) {
    var rootState = $state.get('root');
    rootState.views.leftnav.templateUrl = 'modern-mean-core-override-material/views/override.client.view.nav.left.html';

    //Override Header
    rootState.views.header.templateUrl = 'modern-mean-core-override-material/views/override.client.view.header.html';
    rootState.views.header.controller = 'OverrideHeaderController';

    $log.info('Override::navigationConfig::Init', rootState);
  }
})();
