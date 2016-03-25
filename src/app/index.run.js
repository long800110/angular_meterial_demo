(function() {
  'use strict';

  angular
    .module('angularMeterialDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state, $log) {
    $log.debug('runBlock end' + $state);

    //Store state in the root scope for easy access
    $rootScope.state = $state;
  }

})();
