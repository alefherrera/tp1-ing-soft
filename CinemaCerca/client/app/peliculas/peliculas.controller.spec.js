'use strict';

describe('Controller: PeliculasCtrl', function () {

  // load the controller's module
  beforeEach(module('cinemaCercaApp'));

  var PeliculasCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PeliculasCtrl = $controller('PeliculasCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
