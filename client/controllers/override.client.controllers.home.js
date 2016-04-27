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
