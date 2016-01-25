(function(){
	var ordersService = function($http){

		this.getOrders = function(){
			return $http.get("http://localhost:3000/orders");
		};
	};

	ordersService.$inject = ['$http'];

	angular.module('customersApp').service('ordersService', ordersService);
})();