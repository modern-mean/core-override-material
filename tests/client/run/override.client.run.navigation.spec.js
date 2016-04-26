(function() {
  'use strict';

  describe('override.client.run.navigation.js', function () {
    var $rootScope,
      $state;

    beforeEach(module('override.routes'));


    beforeEach(inject(function(_$rootScope_, _$state_) {

      $rootScope = _$rootScope_;
      $state = _$state_;

    }));


    describe('Override Navigation', function () {

      it('should override the core right nav', function () {
        var rootState = $state.get('root');
        console.log(rootState.views.header)
        expect(rootState.views.rightnav.templateUrl).to.equal('modern-mean-core-override-material/views/override.client.view.nav.left.html');
      });

      it('should override the core header', function () {
        var rootState = $state.get('root');
        expect(rootState.views.header.templateUrl).to.equal('modern-mean-core-override-material/views/override.client.view.header.html');
        expect(rootState.views.header.controller).to.equal('OverrideHeaderController');
      });

    });

  });
})();
