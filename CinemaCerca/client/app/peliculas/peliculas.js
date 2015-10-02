'use strict';

angular.module('cinemaCercaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.peliculas', {
        url: 'peliculas',
        templateUrl: 'app/peliculas/peliculas.html',
        controller: 'PeliculasCtrl'
      });
  });