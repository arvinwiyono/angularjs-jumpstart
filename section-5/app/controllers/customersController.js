(function(){

	var CustomersController = function($scope, $log, customersFactory, appSettings){
		// Initializing properties
		$scope.reverse = false;
		$scope.sortBy = 'name';
		$scope.customers = [];
		$scope.appSettings = appSettings;

		function init(){
			// Style #1 - DEPRECATED
			$scope.customers = customersFactory.getCustomers()
				.success(function(customers){
					$scope.customers = customers;
				})
				.error(function (data, status){
					// Handle error
					$log.log(status +' - ' + data.error);
				});
		};

		init();
		
		$scope.doSort = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		};
	};

	CustomersController.$inject = ['$scope', '$log', 'customersFactory', 'appSettings'];

	angular.module('customersApp')
		.controller('CustomersController', CustomersController);
}());