(function(){

	var OrdersController = function($scope, $routeParams, customersFactory){
		// Initializing properties
		var customerId = $routeParams.customerId;
		$scope.customer = null;

		// Private function
		function init(){
			// Search the customer with the customerId
			$scope.customer = customersFactory.getCustomer(customerId);
		};

		init();
	};

	OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

	angular.module('customersApp')
		.controller('OrdersController', OrdersController);
}());