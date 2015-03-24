angular.module('feedService', [])

.service('feedService', function ($http, $q) {

  var getPosts = function(subName) {
    // var subUrl = 'http://api.reddit.com/hot?after=' + subName + '&jsonp=JSON_CALLBACK';
    var subUrl = '';

    if (subName) {
      subUrl = 'http://api.reddit.com/r/' + subName + '/hot';
    } else {
      subUrl = 'http://api.reddit.com';
    }

    console.log(subUrl);

    // return $http.jsonp(subUrl)
    //   .then(function (resp) {
    //     console.log('got data: ', resp.data);
    //     return resp.data;
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
    
    return $http.get(subUrl)
      .then(function (resp) {
        console.log(resp.data.data);
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