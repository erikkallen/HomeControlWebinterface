'use strict';

angular.module('homeControlWebinterfaceApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
