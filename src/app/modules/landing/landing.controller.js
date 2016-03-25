(function() {
  'use strict';

  angular
    .module('angularMeterialDemo')
    .controller('LandingController', LandingController);

  /** @ngInject */
  function LandingController($log) {
    $log.log("This is landing controller");
    //var vm = this;

    //Data
    //vm.themes = null;
  }
})();
