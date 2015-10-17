'use strict';

angular.module('cinemaCercaApp')
    .controller('PeliculasCtrl', function($scope, OMDb, $state) {
        $scope.message = 'Hello';
        $scope.peliculas = [];
        var peliculas = [{
            imdbID: 'tt0068646',
        }, {
            imdbID: 'tt0110912'
        }, {
            imdbID: 'tt0111161'
        }, {
            imdbID: 'tt0468569'
        }, {
            imdbID: 'tt0137523'
        }, {
            imdbID: 'tt1375666'
        }];

        angular.forEach(peliculas, function(pelicula) {
            OMDb.small(pelicula.imdbID).then(function(r) {
                $scope.peliculas.push(angular.extend(pelicula, r));
               console.log(JSON.stringify(r)); 
            });
        });

        $scope.detalle = function(pelicula) {
            $state.go('main.peliculas.detalle', {
                id: pelicula.imdbID
            });
        };

    });
