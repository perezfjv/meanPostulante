angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider','$httpProvider', function($routeProvider,$locationProvider) {

	$routeProvider
  	.when('/', {
			
			templateUrl: 'registerPostulante.html',
			controller: 'regPostulanteCtrl'
	
		});

     $routeProvider
    .when('/listPostulante', {
      
      templateUrl: 'listPostulante.html',
      controller: 'listPostulanteCtrl'
  
    })
		;

	$locationProvider.html5Mode(true);

}]);
