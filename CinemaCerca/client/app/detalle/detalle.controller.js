'use strict';

angular.module('cinemaCercaApp')
    .controller('DetalleCtrl', function($scope, OMDb, $stateParams, $sce, pelicula) {

        $scope.pelicula = pelicula;

        OMDb.get($stateParams.id).then(function(r) {
            $scope.pelicula.Metascore = r.Metascore;
            $scope.pelicula.imdbRating = r.imdbRating;
        });


        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        };

    });
