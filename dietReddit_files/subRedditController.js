angular.module('subController', [])

.controller('subController', function ($scope, feedService, $location) {
  $scope.posts = [];
  $scope.subReddits = [];
  $scope.path = $location.path().slice(1);

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

   $scope.changeSubreddit = function(subName) {
    console.log(subName);
    $location.path('/' + subName);
  };
  
  $scope.getPosts($scope.path);
  
});