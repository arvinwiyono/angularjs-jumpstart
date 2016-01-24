(function(){

	var OrdersController = function($scope, $routeParams, customersFactory){
		// Initializing properties
		var customerId = $routeParams.customerId;
		$scope.customer = null;

		// Private function
		function init(){
			// Search the customer with the customerId
			customersFactory.getCustomer(customerId)
				.success(function(customer){
					$scope.customer = customer;
				})
				.error(function(data, status, headers, config){
					// Handle error
				});
		};

		init();
	};

	OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

	angular.module('customersApp')
		.controller('OrdersController', OrdersController);
}());