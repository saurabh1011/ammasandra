// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services',
  'mgcrea.ngStrap', 'satellizer'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  // .state('app.login', {
  //   url: "/login",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/login.html",
  //       controller: 'LoginCtrl'
  //     }
  //   }
  // })

  .state('app.profile', {
    url: "/profile",
    views: {
      'menuContent': {
        templateUrl: "templates/profile.html",
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('app.newgame', {
    url: "/newgame",
    views: {
      'menuContent': {
        templateUrl: "templates/newgame.html"
      }
    }
  })


;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/profile');

  $authProvider.facebook({
    clientId: '1234'
  });

  $authProvider.google({
    clientId: '182163907923-a21l1knn1qefjfoasl2t0c2mbv62ca24.apps.googleusercontent.com'
  });

  $authProvider.github({
    clientId: '1234'
  });

  $authProvider.loginRedirect = '/app/profile'
});
