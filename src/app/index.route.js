(function() {
  'use strict';

  angular
    .module('angularMeterialDemo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {

    var layoutStyle = 'main';
    var layouts = {
      main: {
        main: 'app/main/main.html',
        toolbar: 'app/components/toolbar/toolbar.html',
        navigation: 'app/components/navigation/navigation.html'
      }
    };

    $stateProvider
      .state('app', {
        //url: '/',
        abstract: true,
        views: {
          'main@': {
            templateUrl: layouts[layoutStyle].main,
            controller: 'MainController',
            controllerAs: 'vm'
          },
          'navigation@app': {
            templateUrl: layouts[layoutStyle].navigation,
            //controller: 'MainController',
            //controllerAs: 'vm'
          },
          'toolbar@app': {
            templateUrl: layouts[layoutStyle].toolbar,
            //controller: 'MainController',
            //controllerAs: 'vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/landing');
  }

})();
