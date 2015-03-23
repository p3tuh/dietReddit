angular.module('feedService', [])

.service('feedService', function ($http, $q) {

  var getPosts = function(subName) {
    var subUrl = 'http://api.reddit.com/hot?after=' + subName + '&jsonp=JSON_CALLBACK';

    console.log(subUrl);

    return $http.jsonp(subUrl)
      .then(function (resp) {
        console.log(resp.data);
        return resp.data;
      })
      .catch(function (err) {
        console.log(err);
      });

  };

  return {
    getPosts: getPosts
  };

});