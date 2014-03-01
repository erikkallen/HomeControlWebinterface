'use strict';

angular.module('homeControlWebinterfaceApp')
  .controller('RgbcloudCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
	
	$scope.isActive = false;
  });
