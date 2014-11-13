'use strict';

describe('Service: Cities', function () {

  // load the service's module
  beforeEach(module('inkGlobalApp'));

  // instantiate service
  var Cities;
  beforeEach(inject(function (_Cities_) {
    Cities = _Cities_;
  }));

  it('should be an array of at least 10 objects', function () {
    expect(Cities).toBeArrayOfObjects();
    expect(Cities.length).toBeGreaterThan(9)
  });
  it('should be an array of less than 100 objects because otherwiss we need to lookup the cities in batches or with a pro account', function () {
    expect(Cities).toBeArrayOfObjects();
    expect(Cities.length).toBeLessThan(100);
  });
   it('should contain some cities from http://openweathermap.org/help/city_list.txt', function () {
    expect(Cities).toContain({
             "id": 2637487,
             "city": "Southampton",
             "lat": 50.90395,
             "lng": -1.40428,
             "country": "GB"
             });
             expect(Cities).toContain({
              "id": 2643741,
              "city": "City of London",
              "lat": 51.512791,
              "lng": -0.09184,
              "country": "GB"
            });
  });


});
