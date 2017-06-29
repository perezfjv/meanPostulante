angular.module('registerPostulanteCtrl', []).controller('regPostulanteCtrl', function($scope,$http,$routeParams,$rootScope) {



	$scope.titulo ='Postulante';



	//Postulantes
	$scope.newPostulante = {};
	$scope.postulantes = {};


	// Función para registrar a una persona
	$scope.saveEmployee = function() {
		$http.post('/addPostulante', $scope.newPostulante)
		.success(function(data) {
				$scope.newPostulante = {}; // Borramos los datos del formulario
			
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};


    $rootScope.$on("parameters", function(){
           $scope.setearValores();
    });


 	$scope.setearValores = function() {
            $rootScope.version =' VERSION 1.0';
            console.log('--> ' + $rootScope.version);
    }

});

