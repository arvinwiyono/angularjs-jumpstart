(function(){

	var OrdersController = function($scope, $routeParams, customersFactory){
		// Initializing properties
		var customerId = $routeParams.customerId;
		$scope.orders = null;
		$scope.totalSpent = 0;

		// Private function
		function init(){
			// Search the customer with the customerId
			for(var i  = 0; i < $scope.customers.length; i++){
				if($scope.customers[i].id == parseInt(customerId)){
					$scope.orders = $scope.customers[i].orders;
					for(var j = 0; j < $scope.orders.length; j++){
						$scope.totalSpent += $scope.orders[j].total;
					}
					break;
				}
			}
		}

		$scope.customers = customersFactory.getCustomers();

		init();
	};

	OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

	angular.module('customersApp')
		.controller('OrdersController', OrdersController);
}());