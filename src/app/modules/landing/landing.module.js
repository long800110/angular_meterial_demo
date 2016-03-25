(function() {
  'use strict';

  angular
    .module('app.landing', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('app.landing',{
        url: '/landing',
        views: {
          'content@app': {
            templateUrl: 'app/modules/landing/landing.html',
            controller: 'LandingController',
            controllerAs: 'vm'
          }
        },
        resolve: {
          LandingData: function(apiResolver){
            return apiResolver.resolve('landing@get');
          }
        }
      });
  }
})();
