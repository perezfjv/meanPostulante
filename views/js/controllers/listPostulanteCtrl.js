angular.module('listPostulanteCtrl', []).controller('listPostulanteCtrl', function($scope,$http,$routeParams,$rootScope) {

    $scope.titulo ='Postulantes ';
    $scope.employees = {};
    $scope.urlImage = 'Eliminar.gif';
    $scope.nameImage = 'Eliminar';
    //Para postulantes

    $scope.postulantes = {};

	console.log('LIST Postulantes ');	

	$scope.listPostulante = function() {
		
		$scope.callCtrllerRegisterEmployee();

		$http.get('/listPostulante').success(function(data) {
			$scope.postulantes = data;
         
         	console.log('list postulantes success');
		})
		.error(function(data) {
			console.log('Error postulantes : ' + data);
		});
	
	};


	  $scope.eliminarPostulante = function(postulanteId) {


			console.log('ID postulante : ' + postulanteId);


			$http.get('/postulante/?id='+postulanteId).success(function(data){

			
			//$scope.employees = data;

			$scope.listPostulante();

			console.log('borrado postulante ' + postulanteId);

			console.log(data);

			})

			.error(function(data) {

			console.log('Error: ' + data + "wownode");

			});

		};

	
	$scope.callCtrllerRegisterEmployee = function() {
            $rootScope.$emit("parameters", {});
    }


});