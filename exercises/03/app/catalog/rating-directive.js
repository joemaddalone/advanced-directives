angular.module('APP')
.directive('rating', function(){
  'use strict';
  return {
    scope: {rating: "="},
    restrict: 'A',
    link: function(scope, el, attrs, ctrl, transclude){

    }
  }
});
