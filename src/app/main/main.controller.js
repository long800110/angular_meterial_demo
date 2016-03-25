(function() {
  'use strict';

  angular
    .module('angularMeterialDemo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    $log.log('this is MainController');

  }
})();
