(function(){
	var customersFactory = function(){
		var customers = [];
		var factory = {};
		factory.getCustomers = function(){
			return customers;
		};
		return factory;
	};

	angular.module('app')
		.factory('customersFactory', customersFactory);
})();