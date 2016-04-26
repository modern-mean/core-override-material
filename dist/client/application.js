(function(app) {
  'use strict';

  app.registerModule('override', ['core']);
  app.registerModule('override.routes', ['core.routes']);

})(window.modernMeanApplication);

(function () {
  'use strict';

  angular
    .module('override')
    .controller('OverrideHeaderController', OverrideHeaderController);

  OverrideHeaderController.$inject = ['$mdComponentRegistry', '$log'];

  function OverrideHeaderController($mdComponentRegistry, $log) {
    var vm = this;

    vm.name = 'Override Core!!!'
    vm.navigation = {};

    $mdComponentRegistry
      .when('coreLeftNav')
      .then(function(nav) {
        vm.navigation.left = nav;
      });

    $mdComponentRegistry
      .when('coreRightNav')
      .then(function(nav) {
        vm.navigation.right = nav;
      });

    $log.info('OverrideHeaderController::Init', vm);
  }
})();

(function() {
  'use strict';

  // Setting HTML5 Location Mode
  angular
    .module('override.routes')
    .run(overrideMenu);

  overrideMenu.$inject = ['$state'];
  function overrideMenu($state) {
    var rootState = $state.get('root');
    rootState.views.leftnav.templateUrl = 'modern-mean-core-override-material/views/site.client.view.nav.left.html';

    //Override Header
    rootState.views.header.templateUrl = 'modern-mean-core-override-manterial/views/site.client.view.header.html';
    rootState.views.header.controller = 'OverrideHeaderController';
  }
})();
