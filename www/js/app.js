// Ionic MusaGT App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'MusaGT' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'MusaGT.services' is found in services.js
// 'MusaGT.controllers' is found in controllers.js
angular.module('MusaGT', ['ionic'
, 'leaflet-directive'
, 'fab-component'
, 'ngCordova'
, 'igTruncate'
,'MusaGT.controllers'
, 'MusaGT.services'])

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.museos', {
    url: '/museos',
    views: {
      'tab-museos': {
        templateUrl: 'templates/museos/tab-museos.html',
        controller: 'MuseosCtrl'
      }
    }
  })

  .state('tab.museos-detail', {
    url: '/museos-detail/:museoId',
    views: {
      'tab-museos': {
        templateUrl: 'templates/museos/museo-detail.html',
        controller: 'MuseoCtrl'
      }
    }
  })

  .state('tab.museos-historia', {
    url: '/museos-historia/:museoId',
    views: {
      'tab-museos': {
        templateUrl: 'templates/museos/museo-historia.html',
        controller: 'MuseoCtrl'
      }
    }
  })

  .state('tab.museos-galeria', {
    url: '/museos-galeria/:museoId',
    views: {
      'tab-museos': {
        templateUrl: 'templates/museos/museo-galeria.html',
        controller: 'MuseoCtrl'
      }
    }
  })

  .state('tab.museos-comentarios', {
    url: '/museos-comentarios/:museoId',
    views: {
      'tab-museos': {
        templateUrl: 'templates/museos/museo-comentarios.html',
        controller: 'MuseoCtrl'
      }
    }
  })

  .state('tab.mapa', {
    url: '/mapa',
    views: {
      'tab-mapa': {
        templateUrl: 'templates/mapa/tab-mapa.html',
        controller: 'MapaCtrl'
      }
    }
  })

  .state('tab.eventos', {
    url: '/eventos',
    views: {
      'tab-eventos': {
        templateUrl: 'templates/eventos/tab-eventos.html',
        controller: 'EventosCtrl'
      }
    }
  })

  .state('tab.museos-eventos', {
    url: '/museos-eventos/:museoId',
    views: {
      'tab-museos': {
        templateUrl: 'templates/museos/museo-eventos.html',
        controller: 'MuseoCtrl'
      }
    }
  })

  .state('tab.museos-evento', {
    url: '/museos-evento/:eventoId',
    views: {
      'tab-museos': {
        templateUrl: 'templates/museos/museo-evento.html',
        controller: 'MuseoCtrl'
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/museos');

});
