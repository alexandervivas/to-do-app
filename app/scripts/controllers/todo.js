'use strict';

/**
 * @ngdoc function
 * @name toDoListApp.controller:ToDoCtrl
 * @description
 * # ToDoCtrl
 * Controller of the toDoListApp
 */
angular.module('toDoListApp')
  .controller('ToDoCtrl', ['$scope', '$filter', function ($scope, $filter) {
    $scope.todoList = [];

    $scope.textBar = '';

    $scope.createNewTodo = function() {
      if($scope.textBar !== '') {
        var todo = {
          'checked': false,
          'text': $scope.textBar
        };
        $scope.todoList.push(todo);
        $scope.textBar = '';
      }
    }

    $scope.deleteSelectedTodos = function() {
      $scope.todoList = $filter('filter')($scope.todoList, {'checked': false});
    }

    $scope.deleteAllTodos = function() {
      $scope.todoList = [];
    }

  }]);
