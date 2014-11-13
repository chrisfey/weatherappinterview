'use strict';

describe('Controller: CitiesCurrentCtrl', function() {

  // load the controller's module
  beforeEach(module('inkGlobalApp'));

  var CitiesCurrentCtrl,
          scope,
          Weather,
          stateParams,
          $rootScope;


  beforeEach(function() {
    inject(function($controller, _$rootScope_, $q) {
      Weather = {
        getCurrentConditions: function(cityId) {
          var defer = $q.defer();
          defer.resolve({
            "coord": {"lon": -2.6, "lat": 51.46},
            "sys": {"type": 1, "id": 5076, "message": 0.1014, "country": "GB", "sunrise": 1415863537, "sunset": 1415895830}, "weather": [{"id": 501, "main": "Rain", "description": "moderate rain", "icon": "10n"}], "base": "cmc stations",
            "main": {"temp": 286.6, "pressure": 998, "humidity": 87, "temp_min": 285.15, "temp_max": 287.25},
            "wind": {"speed": 3.1, "deg": 190, "var_beg": 140, "var_end": 230},
            "clouds": {"all": 20},
            "dt": 1415897870,
            "id": 2654675,
            "name": "Bristol",
            "cod": 200
          });
          return defer.promise;
        }
      };
      stateParams = {
        cityId: 2654675 //bristol
      };
      spyOn(Weather, 'getCurrentConditions').and.callThrough();
      $rootScope = _$rootScope_;
      scope = $rootScope.$new();
      CitiesCurrentCtrl = $controller('CitiesCurrentCtrl', {
        $scope: scope,
        Weather: Weather,
        $stateParams: stateParams
      });
    })
  });

  stateParams = {
    cityId: 2643741  //City of London
  };

  it('should call the Weather service for current conditions using the stateparams id', function() {
    expect(Weather.getCurrentConditions).toHaveBeenCalledWith(2654675);
  });
  it('should assign the result of the weather service to scope.weatherConditions', function() {
    $rootScope.$apply();
    expect(scope.weatherConditions).toBeDefined();
    expect(scope.weatherConditions.coord.lon).toBe(-2.6);
    expect(scope.weatherConditions.name).toBe('Bristol');
  });
});
