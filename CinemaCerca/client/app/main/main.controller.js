'use strict';

angular.module('cinemaCercaApp')
    .controller('MainCtrl', function($scope, peliculas) {
        $scope.slides = peliculas;

    });
