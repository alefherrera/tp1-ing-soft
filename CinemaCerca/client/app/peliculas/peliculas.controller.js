'use strict';

angular.module('cinemaCercaApp')
    .controller('PeliculasCtrl', function($scope, OMDb, $state, $http) {

        $scope.peliculas = [];

        $http.get("assets/peliculas.json").then(function(response) {
            $scope.peliculas = response.data;
        });

        $scope.detalle = function(pelicula) {
            $state.go('main.peliculas.detalle', {
                id: pelicula.imdbID
            });
        };

    });
