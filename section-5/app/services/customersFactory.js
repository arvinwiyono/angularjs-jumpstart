(function(){
	var customersFactory = function($http){
		
		var factory = {};
	
		factory.getCustomers = function(){
			return $http.get('/customers');
		};

		factory.getCustomer = function(id){
			return $http.get('/customers/'+ id);
		};

		return factory;
	};

	customersFactory.$inject = ['$http'];

	angular.module('customersApp').factory('customersFactory', customersFactory);
})();