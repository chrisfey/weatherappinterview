describe('Weather App', function() {



  it('Should show the user a selection of UK cities', function() {
    browser.get('#/');
    element.all(by.repeater('city in cities.list')).then(function(rows) {
      expect(rows.length).toBeGreaterThan(10);
    });
  });

  it('Should have the ability to sort the cities by temperature in ascending & descending order', function() {

    //sort 1 - 9 by temperature
    element(by.cssContainingText('.city-list .table-wrapper table tr th a', 'Temperature')).click();
    element.all(by.repeater('city in cities.list')).then(function(rows) {
      for (var i = 1; i < rows.length; i++) {
        var a = rows[i - 1].element(by.binding('city.main.temp')).getText();
        var b = rows[i].element(by.binding('city.main.temp')).getText();
        a.then(function(textA) {
          b.then(function(textB) {
            expect(parseInt(textA.substring(0, textA.length - 2))).not.toBeGreaterThan(parseInt(textB.substring(0, textB.length - 2)));
          });
        });
      }
    });
    //sort 9 - 1 by temperature
    element(by.cssContainingText('.city-list .table-wrapper table tr th a', 'Temperature')).click();
    element.all(by.repeater('city in cities.list')).then(function(rows) {
      for (var i = 1; i < rows.length; i++) {
        var a = rows[i - 1].element(by.binding('city.main.temp')).getText();
        var b = rows[i].element(by.binding('city.main.temp')).getText();
        a.then(function(textA) {
          b.then(function(textB) {
            expect(parseInt(textA.substring(0, textA.length - 2))).not.toBeLessThan(parseInt(textB.substring(0, textB.length - 2)));
          });
        });
      }
    });
  });

  it('Should have the ability to sort the cities by name in ascending & descending order', function() {

    //sort A - Z by city name
    element(by.cssContainingText('.city-list .table-wrapper table tr th a', 'City Name')).click();
    element.all(by.repeater('city in cities.list')).then(function(rows) {
      for (var i = 1; i < rows.length; i++) {
        expect(rows[i - 1].element(by.binding('city.name')).getText()).toBeLessThan(rows[i].element(by.binding('city.name')).getText());
      }
    });
    //sort Z - A by city name
    element(by.cssContainingText('.city-list .table-wrapper table tr th a', 'City Name')).click();
    element.all(by.repeater('city in cities.list')).then(function(rows) {
      for (var i = 1; i < rows.length; i++) {
        expect(rows[i - 1].element(by.binding('city.name')).getText()).toBeGreaterThan(rows[i].element(by.binding('city.name')).getText());
      }
    });
  });

  it('Should allow the user to select a city', function() {
    element(by.model('citySearch')).sendKeys('london');
    element(by.repeater('city in cities.list').row(0)).click();
    expect(element(by.css('.current-city-name h2')).getText()).toBe('City of London');
  });

  it('Should show the weather information for a city', function() {

  });

  it('Should show the name of the city', function() {
    browser.get('#/2654675/currentConditions'); //bristol
    expect(element(by.css('.current-city-name h2')).getText()).toBe('Bristol');
  });

  it('Should show the location (longitude and latitude)', function() {
    browser.get('#/2644210/currentConditions'); //liverpool
    expect(element(by.css('.coords')).getText()).toContain('53.4');
  });

  it('Should show the current weather conditions', function() {
    browser.get('#/2654675/currentConditions'); //bristol
    expect(element(by.css('.main-temp')).getText()).not.toBe('');
  });


  it('Should show the temperate and temperature range', function() {
    browser.get('#/2654675/currentConditions'); //bristol
    expect(element(by.css('.range')).getText()).not.toBe('');
  });

  it('Should show the current atmospheric pressure', function() {
    browser.get('#/2654675/currentConditions'); //bristol
    expect(element(by.css('.pressure')).getText()).not.toBe('');
  });

  it('Should show the current humidity', function() {
    browser.get('#/2654675/currentConditions'); //bristol
    expect(element(by.css('.humidity')).getText()).not.toBe('');
  });

  it('Should allow the user to pick another city if they have already selected one', function() {
    element(by.model('citySearch')).sendKeys('Brighton');
    element(by.repeater('city in cities.list').row(0)).click();
    expect(element(by.css('.current-city-name h2')).getText()).toBe('Brighton');
    element(by.model('citySearch')).clear();
    element(by.model('citySearch')).clear().sendKeys('Southampton');
    element(by.repeater('city in cities.list').row(0)).click();
    expect(element(by.css('.current-city-name h2')).getText()).toBe('Southampton');
  });
});