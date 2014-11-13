'use strict';

/**
 * @ngdoc function
 * @name inkGlobalApp.controller:CitiesCurrentCtrl
 * @description
 * # CitiesCurrentCtrl
 * Controller of the inkGlobalApp
 */
angular.module('inkGlobalApp')
        .controller('CitiesCurrentCtrl', function($scope, Weather, $stateParams) {
          Weather.getCurrentConditions($stateParams.cityId).then(function(data) {
            $scope.weatherConditions = data;
          });
        });
