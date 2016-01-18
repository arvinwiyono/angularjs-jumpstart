(function(){

	var CustomersController = function($scope, customersFactory){
		// Initializing properties
		$scope.reverse = false;
		$scope.sortBy = 'name';

		$scope.customers = customersFactory.getCustomers();
		
		$scope.doSort = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		};
	};

	CustomersController.$inject = ['$scope', 'customersFactory'];

	angular.module('customersApp')
		.controller('CustomersController', CustomersController);
}());