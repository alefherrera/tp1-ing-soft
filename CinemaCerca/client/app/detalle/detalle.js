'use strict';

angular.module('cinemaCercaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.peliculas.detalle', {
        url: '/detalle/{id}',
        templateUrl: 'app/detalle/detalle.html',
        controller: 'DetalleCtrl'
      });
  });