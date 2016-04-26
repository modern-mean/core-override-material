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
