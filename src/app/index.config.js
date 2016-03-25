(function() {
  'use strict';

  angular
    .module('angularMeterialDemo')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $translateProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    //i18n
    $translateProvider.useStaticFilesLoader({
      files: [{
        prefix: 'app/i18n/',
        suffix: '.json'
      }]
    });
    $translateProvider.registerAvailableLanguageKeys(['en', 'zh'], {
      'en_US': 'en',
      'en_UK': 'en',
      'zh_CN': 'zh'
    });
    //set preferred lang
    //$translateProvider.preferredLanguage('en');
    //auto determine preferred lang
    $translateProvider.determinePreferredLanguage();
    //when can not determine lang, choose en lang.
    $translateProvider.fallbackLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escaped');
  }

})();
