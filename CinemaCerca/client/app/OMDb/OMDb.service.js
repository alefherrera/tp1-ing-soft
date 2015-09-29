'use strict';

angular.module('cinemaCercaApp')
  .service('OMDb', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	
  	var url = "http://www.omdbapi.com";

  	var get = function (id) {
  		return $http.get(url + "/?i=" + id).then(function (response) {
  			return response.data;
  		});
  	};

  	return {
  		get : get
  	};

  });
