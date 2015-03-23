angular.module('dietReddit', ['ui.router', 'dashController', 'homeController', 'feedService'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'app/templates/home.html',
    controller: 'homeController'
  })

  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'app/templates/dashboard.html',
    controller: 'dashController'
  });

  $urlRouterProvider.otherwise('/home');

});