(function(){

	var OrdersController = function($scope, $routeParams, customersFactory){
		// Initializing properties
		var customerId = $routeParams.customerId;
		$scope.customer = null;

		// Private function
		function init(){
			// Search the customer with the customerId
			customersFactory.getCustomer(customerId)
				.then(function(customer){
					$scope.customer = customer;
				}, function errorCallback(response){
					// Handle error
					$log.log(response.status +' - ' + response.data.error);
				});
		};

		init();
	};

	OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

	angular.module('customersApp')
		.controller('OrdersController', OrdersController);
}());