angular.module('subController', [])

.controller('subController', function ($scope, feedService, $location) {
  $scope.posts = [];
  $scope.path = $location.path().slice(1);  //current path eg. 'pics+funny'
  $scope.subReddits = $scope.path;
  var lastPost;

  $scope.getPosts = function(subName) {
    feedService.getPosts(subName)
      .then(function(data) {
        $scope.posts = data.data.children;
        lastPost = $scope.posts[$scope.posts.length-1].data.id;
        console.log(lastPost);
      });
  };

  $scope.addSubreddit = function(addName) {  //reddit allows concatenating sub names together
    var path = $scope.path + '+' + addName; 
    $location.path('/' + path);
  };

   $scope.changeSubreddit = function(subName) {
    console.log(subName);
    $location.path('/' + subName);
  };

  $scope.nextPage = function() {
    console.log('path: ', $scope.path);
    var busy = false;

    if (!lastPost || busy) {
      return;
    }
    
    if (!$scope.path) {
      $scope.path = ''
      console.log($scope.path);
    }

    busy = true;

    feedService.nextPage($scope.path, lastPost)
      .then(function (data) {
        for (var i = 0; i < data.data.children.length; i++){
          $scope.posts.push(data.data.children[i]);
        }
        busy = false;
        console.log($scope.posts.length);
      })
  };

  $scope.getPosts($scope.path);
  
});