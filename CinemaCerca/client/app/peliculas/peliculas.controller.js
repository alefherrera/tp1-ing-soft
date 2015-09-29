'use strict';

angular.module('cinemaCercaApp')
    .controller('PeliculasCtrl', function($scope, OMDb, $state) {
        $scope.message = 'Hello';
        $scope.peliculas = [];
        var peliculas = ["tt0068646", "tt0110912", "tt0111161", "tt0468569", "tt0137523", "tt1375666"];

        angular.forEach(peliculas, function(pelicula) {
            OMDb.get(pelicula).then(function(r) {
                $scope.peliculas.push(r);
            });
        });

        $scope.detalle = function(pelicula) {
            $state.go("peliculas.detalle", {
                id: pelicula.imdbID
            });
        }

    });
