(function(){
	var customersFactory = function($http){
		
		var factory = {};
	
		factory.getCustomers = function(){
			return $http.get('http://localhost:3000/customers');
		};

		factory.getCustomer = function(id){
			return $http.get('http://localhost:3000/customers/'+ id);
		};

		return factory;
	};

	customersFactory.$inject = ['$http'];

	angular.module('customersApp').factory('customersFactory', customersFactory);
})();