(function(){

	var CustomersController = function($scope, $log, customersFactory, appSettings){
		// Initializing properties
		$scope.reverse = false;
		$scope.sortBy = 'name';
		$scope.customers = [];
		$scope.appSettings = appSettings;

		function init(){
			$scope.customers = customersFactory.getCustomers()
				.then(function(customers){
					$scope.customers = customers;
				}, function errorCallback(response){
					// Handle error
					$log.log(response.status +' - ' + response.data.error);
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