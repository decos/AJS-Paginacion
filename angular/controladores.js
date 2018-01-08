var app = angular.module('paginacionApp.controladores',[]);

app.controller('paisesCtrl', ['$scope','Paises', function($scope,Paises){

		$scope.paises = Paises;

		$scope.irA = function(pag){
				Paises.irA(pag);
		}

		$scope.irUltima = function(){
				Paises.cargarUltima();
		}

		$scope.irPrimera = function(){
				Paises.cargarPrimera();
		}

		$scope.arrPaginas = function( num ){
				var arr = [];

				for( var i = 0; i<num; i++){
						arr.push(i+1)
				}

				return arr;
		}

}]);
