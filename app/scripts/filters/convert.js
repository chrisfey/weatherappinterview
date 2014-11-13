'use strict';

/**
 * @ngdoc filter
 * @name inkGlobalApp.filter:convert
 * @function
 * @description
 * # convert
 * Filter in the inkGlobalApp.
 */
angular.module('inkGlobalApp')
        .filter('convert', function() {
          return function(kelvin, type) {
            switch (type.toLowerCase()) {
              case 'kelvin':
              case 'k':
                return Math.round(kelvin)  +"°K"; 
                break;
              case 'farenheight':
              case 'f':
                return Math.round(((9 / 5) * (kelvin - 273.15)) + 32) +"°F";
                break;
              case 'celsius':
              case 'c':
              default: //default to celsius as well
                return Math.round(kelvin - 273.15) + "°C";
                break;

            }
            return 'convert filter: ' + input;
          };
        });
