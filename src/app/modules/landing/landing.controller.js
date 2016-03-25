(function() {
  'use strict';

  angular
    .module('angularMeterialDemo')
    .controller('LandingController', LandingController);

  /** @ngInject */
  function LandingController($log, LandingData) {
    $log.log("This is landing controller");
    var vm = this;

    //Data
    vm.helloText = LandingData.data.helloText;

  }
})();
