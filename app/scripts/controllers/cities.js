'use strict';
/**
 * @ngdoc function
 * @name inkGlobalApp.controller:CitiesCtrl
 * @description
 * # CitiesCtrl
 * Controller of the inkGlobalApp
 */
angular.module('inkGlobalApp')
        .controller('CitiesCtrl', function($scope, Weather, $state) {
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
          $scope.city = {};
          $scope.$watch('city', function() {
            $state.go('cities.current', {cityId: $scope.city.selected.id});
            console.log($scope.city)
          }, true);
        });
