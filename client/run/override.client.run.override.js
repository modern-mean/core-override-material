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

    var homeState = $state.get('root.home');
    //Override Header
    homeState.views['main@'].templateUrl = 'modern-mean-core-override-material/views/override.client.view.home.html';
    homeState.views['main@'].controller = 'OverrideHomeController';

    $log.info('Override::navigationConfig::Inita', rootState);
  }
})();
