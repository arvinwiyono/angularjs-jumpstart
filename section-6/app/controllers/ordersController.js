(function(){

	var OrdersController = function($scope, $log, $routeParams, customersFactory){
		// Initializing properties
		var customerId = $routeParams.customerId;
		$scope.customer = {};

		// Private function
		function init(){
			// Style #2
			// Search the customer with the customerId
			customersFactory.getCustomer(customerId)
				.then(function(response){
					$scope.customer = response.data;
				}, function errorCallback(response){
					// Handle error
					$log.log(response.status +' - ' + response.data.error);
				});
		};

		init();
	};

	OrdersController.$inject = ['$scope', '$log', '$routeParams', 'customersFactory'];

	angular.module('customersApp')
		.controller('OrdersController', OrdersController);
}());