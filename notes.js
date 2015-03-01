// directive controllers
directive('myDirective', function(){
  return {
    scope: {},
    restrict: 'E',
    controller: ['$scope', function($scope){
      this.name='Controller Name';
      $scope.name='Directive Name';
    }]
  };
});
