angular.module('homeController', [])

.controller('homeController', function ($scope, feedService, $location) {
  $scope.posts = [];
  $scope.subReddits = [];

  $scope.getPosts = function(subName) {
    feedService.getPosts(subName)
      .then(function(data) {
        $scope.posts = data.data.children;
        console.log($scope.posts);
      });
  };

  $scope.changeSubreddit = function(subName) {
    console.log(subName);
    $location.path('/' + subName);
  };

  $scope.getPosts();
  
});