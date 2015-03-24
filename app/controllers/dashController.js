angular.module('dashController', [])

.controller('dashController', function ($scope, feedService) {
  $scope.posts = [];
  $scope.subReddits = [];

  $scope.getPosts = function(subName) {
    feedService.getPosts(subName)
      .then(function(data) {
        $scope.posts = (data.data.children);
        console.log($scope.posts.length);
      });
  };

  $scope.addSubreddit = function(subName) {
    console.log('adding');
    feedService.getPosts(subName) 
      .then(function(data) {
        for (var i = 0; i < data.data.children.length; i++){
          $scope.posts.push(data.data.children[i]);
        }       
        console.log($scope.posts.length); 
      });
  };

  $scope.getPosts();
  
});