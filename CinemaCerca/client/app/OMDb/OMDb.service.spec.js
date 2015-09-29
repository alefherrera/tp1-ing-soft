'use strict';

describe('Service: OMDb', function () {

  // load the service's module
  beforeEach(module('cinemaCercaApp'));

  // instantiate service
  var OMDb;
  beforeEach(inject(function (_OMDb_) {
    OMDb = _OMDb_;
  }));

  it('should do something', function () {
    expect(!!OMDb).toBe(true);
  });

});
