'use strict';

/**
 * @ngdoc overview
 * @name inkGlobalApp
 * @description
 * # inkGlobalApp
 *
 * Main module of the application.
 */
angular.module('inkGlobalApp', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'ui.select',
])
        .config(function($stateProvider, $urlRouterProvider) {
          // For any unmatched url, redirect to /state1
          $urlRouterProvider.otherwise('/');
          // Now set up the states
          $stateProvider.state('cities', {
            url: '/',
            templateUrl: 'views/cities.html',
            controller: 'CitiesCtrl'
          }).state('cities.current', {
            url: ':cityId/currentConditions',
            templateUrl: 'views/cities.current.html',
            controller: 'CitiesCurrentCtrl'
          });
        });

