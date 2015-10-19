'use strict';

angular.module('cinemaCercaApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('main.peliculas.detalle', {
                url: '/{id}',
                templateUrl: 'app/detalle/detalle.html',
                controller: 'DetalleCtrl',
                resolve: {
                    pelicula: function(peliculas, $stateParams) {
                        return _.find(peliculas, { imdbID: $stateParams.id });
                    }
                },
                ncyBreadcrumb: {
                    label: '{{pelicula.Title}}'
                }
            });
    });
