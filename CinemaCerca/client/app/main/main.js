'use strict';

angular.module('cinemaCercaApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                resolve: {
                    peliculas: function($http) {
                        return $http.get("assets/peliculas.json").then(function(response) {
                            return response.data;
                        });
                    }
                },
                ncyBreadcrumb: {
                    label: 'Home'
                }
            });
    });
