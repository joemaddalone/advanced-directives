angular.module('APP')
.directive('catalogImage', function(){
  'use strict';
  return {
    scope: {item: '='},
    require: '^catalog',
    restrict: 'A',
    replace: true,
    compile: function compile(templateElement, templateAttributes) {
          /**
           * compile phase
           */
          return {
            pre: function preLink(scope, elm, attrs, ctrl) {
              /*
               * preLink phase
               */
              elm.find('img').bind('error', function(){
                  angular.element(this).attr('src', '???');
              });
            },
            post: function postLink(scope, elm){
              /*
               * postLink phase
               */
            }
          }
    }
  }
})
