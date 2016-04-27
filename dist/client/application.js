(function(app) {
  'use strict';

  app.registerModule('override', ['core', 'angularMoment']);
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

    vm.name = 'Override Core!!!';
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

(function () {
  'use strict';

  angular
    .module('override')
    .controller('OverrideHomeController', OverrideHomeController);

  OverrideHomeController.$inject = ['$log', 'moment'];

  function OverrideHomeController($log) {
    var vm = this;

    vm.days = moment().daysInMonth();


    $log.info('OverrideHomeController::Init', vm);
  }
})();

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
