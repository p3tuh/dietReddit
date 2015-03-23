angular.module('homeController', [])

.controller('homeController', function ($scope, feedService) {
  $scope.posts = [];

  $scope.getPosts = function(subName) {
    feedService.getPosts(subName)
      .then(function(data) {
        $scope.posts = data.data.children;
        console.log($scope.posts);
      });
  };

  $scope.getPosts('front');
  
});