'use strict';

describe('Controller: CitiesCtrl', function() {

  // load the controller's module
  beforeEach(module('inkGlobalApp'));

  var CitiesCtrl,
          scope,
          Weather;


  beforeEach(function() {
    inject(function($controller, $rootScope, $q) {

      Weather = {
        getCurrentConditions: function() {
          var def = $q.defer();
          def.resolve({});
          return def.promise;
        },
        getCities: function() {
          var def = $q.defer();
          def.resolve({});
          return def.promise;
        }
      };

      spyOn(Weather, 'getCurrentConditions').and.callThrough();
      spyOn(Weather, 'getCities').and.callThrough();
      scope = $rootScope.$new();
      CitiesCtrl = $controller('CitiesCtrl', {
        $scope: scope,
        Weather: Weather
      });


    });

  });

  it("should start showing temperatures in celsius", function() {
    expect(scope.tempType).toBe('Celsius');
  });
  
  it("should call the Weather service to get a list of cities", function() {
    expect(Weather.getCities).toHaveBeenCalled();
  });
  
  describe('Method: setOrder', function() {
    
    it("should order by the parameter that gets passed in", function() {
      scope.setOrder('name');
      expect(scope.order).toBe('name');
      scope.setOrder('city.name');
      expect(scope.order).toBe('city.name');
    });
    
    it("should order in reverse if its been called with the same param an even number of times", function() {
      scope.setOrder('name');
      expect(scope.reverse).toBe(false);
      // secondtime - reverse
      scope.setOrder('name');
      expect(scope.reverse).toBe(true);
      //third time - normal
      scope.setOrder('name');
      expect(scope.reverse).toBe(false);
      // first time with a different name - normal
      scope.setOrder('temperature');
      expect(scope.reverse).toBe(false);
      scope.setOrder('temperature');
      expect(scope.reverse).toBe(true);
      scope.setOrder('temperature');
      expect(scope.reverse).toBe(false);
      scope.setOrder('temperature');
      expect(scope.reverse).toBe(true);
      // first time with a different name - normal
      scope.setOrder('name');
      expect(scope.reverse).toBe(false);
    });
  });


});
