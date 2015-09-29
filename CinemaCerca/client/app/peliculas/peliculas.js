'use strict';

angular.module('cinemaCercaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('peliculas', {
        url: '/peliculas',
        templateUrl: 'app/peliculas/peliculas.html',
        controller: 'PeliculasCtrl'
      });
  });