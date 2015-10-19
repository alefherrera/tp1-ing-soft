'use strict';

angular.module('cinemaCercaApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('main.peliculas', {
                url: 'peliculas',
                templateUrl: 'app/peliculas/peliculas.html',
                controller: 'PeliculasCtrl',
                resolve: {
                    peliculas: function($http) {
                        return $http.get("assets/peliculas.json").then(function(response) {
                            return response.data;
                        });
                    }
                },
                ncyBreadcrumb: {
                    label: 'Peliculas'
                }
            });
    });
