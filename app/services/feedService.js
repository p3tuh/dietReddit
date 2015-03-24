angular.module('feedService', [])

.service('feedService', function ($http, $q) {

  var getPosts = function(subName) {
    var subUrl = '';

    if (subName) {
      subUrl = 'http://api.reddit.com/r/' + subName + '/hot';
    } else {
      subUrl = 'http://api.reddit.com';
    }

    console.log('sub ', subUrl);

    return $http.get(subUrl)
      .then(function (resp) {
        console.log(resp.data.data);
        return resp.data;
      })
      .catch(function (err) {
        console.log(err);
      });

  };

  var nextPage = function(subName, lastID) {
    var url;
    
    if (!subName) {
      console.log('here');
      url = 'http://api.reddit.com' + subName + '/hot/?&after=t3_' + lastID;
    } else {
      url = 'http://api.reddit.com/r/' + subName + '/hot/?&after=t3_' + lastID;
    }

    console.log(url);

    return $http.get(url)
      .then(function (resp) {
        console.log(resp.data);
        return resp.data;
      })
      .catch(function (err) {
        console.log(err);
      });

  };

  return {
    getPosts: getPosts,
    nextPage: nextPage
  };

});