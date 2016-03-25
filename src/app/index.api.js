(function() {
  'use strict';

  angular
    .module('angularMeterialDemo')
    .factory('api', apiService);


  /** @ngInject */
  function apiService($resource) {

    var api = {};
    //For mock
    api.baseUrl = 'app/data/';
    api.landing = $resource(api.baseUrl + 'landing/landing.json');
    return api;
  }
})();
