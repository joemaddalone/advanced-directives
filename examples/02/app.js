angular.module('APP',[])
.directive('mydir', function(){
  return {
    scope: {},
    restrict: 'E',
    compile: compileFn
  };
})
.directive('mytransclude', function(){
  return {
    scope: {},
    restrict: 'E',
    transclude: true,
    template: '<div ng-transclude></div>',
    compile: compileFn
  };
});

var compileFn = function(templateElement, templateAttributes) {
  /* compile phase */
  console.log('compile', templateAttributes.$$element.attr('name'))
  return {
    pre: function preLink(scope, elm, attrs, ctrl) {
      /* preLink phase */
      console.log('preLink', attrs.name)
    },
    post: function postLink(scope, elm, attrs, ctrl){
      /* postLink phase */
      console.log('postLink', attrs.name)
    }
  }
}
