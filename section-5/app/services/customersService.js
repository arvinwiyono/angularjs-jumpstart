(function(){
	var customersService = function(staticCustomers){
		var customers = staticCustomers;

		this.getCustomers = function(){
			return customers;
		};

		this.getCustomer = function(id){
			for(var i  = 0; i < customers.length; i++){
				if(customers[i].id == parseInt(id)){
					return customers[i];
				}
			}
			return {};
		};
	};

	angular.module('customersApp').service('customersService', customersService);
})();