'use strict';

angular.module('cinemaCercaApp')
    .controller('DetalleCtrl', function($scope, OMDb, $stateParams, $sce) {

        var trailers = {
            "tt0068646": "https://www.youtube.com/embed/sY1S34973zA",
            "tt0110912": "https://www.youtube.com/embed/s7EdQ4FqbhY",
            "tt0111161": "https://www.youtube.com/embed/NmzuHjWmXOc",
            "tt0468569": "https://www.youtube.com/embed/EXeTwQWrcwY",
            "tt0137523": "https://www.youtube.com/embed/SUXWAEX2jlg",
            "tt1375666": "https://www.youtube.com/embed/YoHD9XEInc0"
        };

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        };

        OMDb.get($stateParams.id).then(function(r) {
            $scope.pelicula = r;
            $scope.pelicula.Trailer = trailers[$stateParams.id];
        });

    });
