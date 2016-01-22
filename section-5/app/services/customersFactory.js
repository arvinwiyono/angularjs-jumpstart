(function(){
	var customersFactory = function(staticCustomers){
		var customers = staticCustomers;

		var factory = {};
		
		factory.getCustomers = function(){
			return customers;
		};

		factory.getCustomer = function(id){
			for(var i  = 0; i < customers.length; i++){
				if(customers[i].id == parseInt(id)){
					return customers[i];
				}
			}
			return {};
		};

		return factory;
	};

	angular.module('customersApp').factory('customersFactory', customersFactory);
})();