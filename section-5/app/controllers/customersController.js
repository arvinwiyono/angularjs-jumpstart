(function(){

	var CustomersController = function($scope, customersFactory, appSettings){
		// Initializing properties
		$scope.reverse = false;
		$scope.sortBy = 'name';
		$scope.customers = [];
		$scope.appSettings = appSettings;

		function init(){
			$scope.customers = customersFactory.getCustomers()
				.success(function(customers){
					$scope.customers = customers;
				})
				.error(function(data, status, headers, config){
					// Handle error
				});
		};

		init();
		
		$scope.doSort = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		};
	};

	CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

	angular.module('customersApp')
		.controller('CustomersController', CustomersController);
}());