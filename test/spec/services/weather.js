'use strict';

describe('Service: Weather', function() {

  // load the service's module
  beforeEach(module('inkGlobalApp'));

  // instantiate service
  var Weather, $httpBackend, Cities;

  beforeEach(function() {
    module(function($provide) {
      $provide.factory('Cities', function() {
        return [
          {id: 123},
          {id: 456},
          {id: 789},
          {id: 101112},
          {id: 131415}
        ];
      });
    });
    inject(function(_Weather_, _$httpBackend_) {

      Weather = _Weather_;

      $httpBackend = _$httpBackend_;
    })
  });


  it('should call openweatherapi for a batch of cities so that we have there temperatures for sorting', function() {

    $httpBackend.expectGET('http://api.openweathermap.org/data/2.5/group?id=123,456,789,101112,131415').respond({the:'data1'});
    Weather.getCities().then(function(data){
      expect(data).toEqual({the:'data1'});
    });;
    $httpBackend.flush();
  });


  it('should call openweatherapi for the current conditions for a cityID', function() {
    $httpBackend.expectGET('http://api.openweathermap.org/data/2.5/weather?id=123456789').respond({the:'data2'});
    Weather.getCurrentConditions(123456789).then(function(data){
      expect(data).toEqual({the:'data2'});
    });
    $httpBackend.flush();
  })

});
