'use strict';

/**
 * @ngdoc service
 * @name inkGlobalApp.Weather
 * @description
 * # Weather
 * Service in the inkGlobalApp.
 */
angular.module('inkGlobalApp')
        .service('Weather', function Weather(Cities, $q, $http) {
          var Weather = {};
          Weather.getCities = function() {
            var deferred = $q.defer();
            var ids = "";
            for (var i = 0; i < Cities.length - 1; i++) {
              ids = "" + ids + Cities[i].id + ","
            }
            ids = "" + ids + Cities[Cities.length - 1].id;
            $http.get("http://api.openweathermap.org/data/2.5/group?id=" + ids).
                    success(function(data, status, headers, config) {
                      deferred.resolve(data);
                    }).
                    error(function(data, status, headers, config) {
                      deferred.reject(data);
                    })
            return deferred.promise;
          };
          Weather.getCurrentConditions = function(cityId) {
            var deferred = $q.defer();

            $http.get("http://api.openweathermap.org/data/2.5/weather?id=" + cityId).
                    success(function(data, status, headers, config) {
                      deferred.resolve(data);
                    }).
                    error(function(data, status, headers, config) {
                      deferred.reject(data);
                    });

            return deferred.promise;
          }


          return Weather;
        });
