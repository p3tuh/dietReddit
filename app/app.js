angular.module('dietReddit', ['ui.router', 'dashController', 'homeController', 'feedService', 'subController', 'infinite-scroll'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider

  // .state('home', {
  //   url: '/',
  //   templateUrl: 'app/templates/home.html',
  //   controller: 'homeController'
  // })

  // .state('dashboard', {
  //   url: '/dashboard',
  //   templateUrl: 'app/templates/dashboard.html',
  //   controller: 'dashController'
  // })

  .state('subReddit', {
    url: '/:_id',
    templateUrl: 'app/templates/subReddits.html',
    controller: 'subController'
  });

  $urlRouterProvider.otherwise('/');

});