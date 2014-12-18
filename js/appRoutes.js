angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'partials/home',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'partials/nerd',
			controller: 'NerdController'
		})

		.when('/geeks', {
			templateUrl: 'partials/geek',
			controller: 'GeekController'	
		});

	$locationProvider.html5Mode(true);

}]);