'use strict';

angular.module('cinemaCercaApp')
  .controller('DetalleCtrl', function ($scope, OMDb, $stateParams) {
    $scope.message = 'Hello';

    OMDb.get($stateParams.id).then(function (r) {
    	$scope.pelicula = r;
    });


  });
