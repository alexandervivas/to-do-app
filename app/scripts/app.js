'use strict';

/**
 * @ngdoc overview
 * @name toDoListApp
 * @description
 * # toDoListApp
 *
 * Main module of the application.
 */
angular
  .module('toDoListApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/todo.html',
        controller: 'ToDoCtrl',
        controllerAs: 'todo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
