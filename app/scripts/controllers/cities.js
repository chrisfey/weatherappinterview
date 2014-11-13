'use strict';

/**
 * @ngdoc function
 * @name inkGlobalApp.controller:CitiesCtrl
 * @description
 * # CitiesCtrl
 * Controller of the inkGlobalApp
 */
angular.module('inkGlobalApp')
        .controller('CitiesCtrl', function($scope, Weather) {
          Weather.getCities().then(function(data) {
            $scope.cities = data;
          });
          $scope.setOrder = function(name) {
            if ($scope.order === name && !$scope.reverse) {
              $scope.reverse = true;
            } else {
              $scope.order = name;
              $scope.reverse = false;
            }
          };
          $scope.tempType = 'Celsius';
         
        });
