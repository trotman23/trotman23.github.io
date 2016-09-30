var fflApp = angular.module('fflApp', []);

function fflCtrl($scope) {
    $http.get('http://trotman23.github.io/ffl/week3.json')
       .then(function(res){
          $scope.ranks = res.data;                
        });
}