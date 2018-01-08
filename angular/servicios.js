var app = angular.module('paginacionApp.servicios',[]);

app.factory('Paises', ['$http', function($http){

		var self = {
				cargando : false,
				pagina: 1,
				total: 0,
				totalpaginas: 0,
				data: [],

				irA: function( pag ){
					self.cargarData({
							pagina: pag
					})
				},

				cargarUltima: function(){
						//Objeto anonimo en JS
						self.cargarData({
								pagina: self.totalpaginas
						})
				},
				cargarPrimera: function(){
						//Objeto anonimo en JS
						self.cargarData({
								pagina: 1
						})
				},

				cargarData: function(opciones){
						self.cargando = true;
						self.pagina = opciones.pagina;

						$http.post('php/servicios/paises.getPaises.php', opciones)
								.then( function( response ){
												self.cargando = false;
												self.data = response.data.data;
												self.total = response.data.total;
												self.totalpaginas = response.data.totalpaginas;
												console.log( response );
										}, function( response ){
												console.error( response );
										});
				}
		}

		var defecto = {
				pagina: 1
		}

		self.cargarData( defecto );

		return self;

}])
