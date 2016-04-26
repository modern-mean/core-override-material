(function() {
  'use strict';

  var $state,
    $scope,
    $rootScope,
    $compile,
    $controller,
    OverrideHeaderController,
    $mdComponentRegistry;

  describe('override.client.controller.header.js', function () {

    beforeEach(module('override'));

    beforeEach(inject(function(_$state_, _$rootScope_, _$compile_, $controller, _$mdComponentRegistry_) {
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      $state = _$state_;
      $compile = _$compile_;
      $mdComponentRegistry = _$mdComponentRegistry_;

      OverrideHeaderController = $controller('OverrideHeaderController as vm', {
        $scope: $scope
      });
    }));

    describe('OverrideHeaderController', function () {
      it('should have a vm variable', function () {
        expect($scope.vm).to.be.an('object');
      });

      it('should have a vm.navigation object', function () {
        expect($scope.vm.navigation).to.be.an('object');
      });

      it('should set vm.navigation.left when ready', function () {
        $compile('<md-sidenav md-component-id="coreLeftNav" class="md-sidenav-right md-whiteframe-z2"></md-sidenav>')($rootScope);
        $rootScope.$digest();

        var leftNav = $mdComponentRegistry.get('coreLeftNav');
        return expect($scope.vm.navigation.left).to.equal(leftNav);
      });

      it('should set vm.navigation.right when ready', function () {
        $compile('<md-sidenav md-component-id="coreRightNav" class="md-sidenav-right md-whiteframe-z2"></md-sidenav>')($rootScope);
        $rootScope.$digest();

        var rightNav = $mdComponentRegistry.get('coreRightNav');
        return expect($scope.vm.navigation.right).to.equal(rightNav);
      });
    });
  });
})();
