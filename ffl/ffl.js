var myApp = angular.module('myApp', []);

function fflCtrl($scope) {
    $http.get('week3.json')
       .then(function(res){
          $scope.ranks = res.data;                
        });
}