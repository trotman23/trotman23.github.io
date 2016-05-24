(function () {
	'use strict';

	var app = angular
	.module('app', ['ngRoute', 'ngCookies'/*, 'googlechart'*/])
	.config(config)
	.run(run);
	config.$inject = ['$routeProvider', '$locationProvider'];
	function config($routeProvider, $locationProvider) {
		$routeProvider
		.when('/bdb', {
			controller: 'BDBController',
			templateUrl: 'bdb/bdb.view.html',
			controllerAs: 'vm'
		})
		.otherwise({ redirectTo: '/' });
	}

	run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
    }      
})();