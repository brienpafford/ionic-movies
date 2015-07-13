// Ionic ionicMovies App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ionicMovies' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'ionicMovies.services' is found in services.js
// 'ionicMovies.controllers' is found in controllers.js
angular.module('ionicMovies', ['ionic', 'ionicMovies.home', 'ionicMovies.nytr', 'ionicMovies.omdb', 'ionicMovies.tmdb', 'ionicMovies.roulette', 'ionicMovies.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
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
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.nytr', {
    url: '/nytr',
    views: {
      'tab-nytr': {
        templateUrl: 'templates/tab-nytr.html',
        controller: 'NytrCtrl'
      }
    }
  })

  .state('tab.omdb', {
      url: '/omdb',
      views: {
        'tab-omdb': {
          templateUrl: 'templates/tab-omdb.html',
          controller: 'OmdbCtrl'
        }
      }
    })

  .state('tab.tmdb', {
    url: '/tmdb',
    views: {
      'tab-tmdb': {
        templateUrl: 'templates/tab-tmdb.html',
        controller: 'TmdbCtrl'
      }
    }
  })

  .state('tab.roulette', {
      url: '/roulette',
      views: {
        'tab-roulette': {
          templateUrl: 'templates/tab-roulette.html',
          controller: 'RouletteCtrl'
        }
      }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
