'use strict';

describe('Filter: convert', function() {

  // load the filter's module
  beforeEach(module('inkGlobalApp'));

  // initialize a new instance of the filter before each test
  var convert;
  beforeEach(inject(function($filter) {
    convert = $filter('convert');
  }));

  var kelvinCase1 = 280;
  var kelvinCase2 = 290.5111111;
  var kelvinCase3 = 249.4999;
  it('should convert kelvin to celsius to the nearest degree"', function() {
    expect(convert(kelvinCase1, 'celsius')).toBe('7°C');
    expect(convert(kelvinCase3, 'C')).toBe('-24°C');
    expect(convert(kelvinCase2, 'c')).toBe('17°C');
    expect(convert(kelvinCase1, 'CELSIUS')).toBe('7°C');


  });
  it('should convert kelvin to farenheight to the nearest degree', function() {
    expect(convert(kelvinCase1, 'F')).toBe('44°F');
    expect(convert(kelvinCase2, 'Farenheight')).toBe('63°F');
    expect(convert(kelvinCase3, 'farenheight')).toBe('-11°F');
  });
  
  it('should convert kelvin to the nearest degree', function() {
    expect(convert(kelvinCase1, 'k')).toBe('280°K');
    expect(convert(kelvinCase2, 'Kelvin')).toBe('291°K');
    expect(convert(kelvinCase3, 'K')).toBe('249°K');
  });

});
