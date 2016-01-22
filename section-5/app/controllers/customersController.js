(function(){

	var CustomersController = function($scope, customersService, appSettings){
		// Initializing properties
		$scope.reverse = false;
		$scope.sortBy = 'name';
		$scope.appSettings = appSettings;

		function init(){
			$scope.customers = customersService.getCustomers();
		};

		init();
		
		$scope.doSort = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		};
	};

	CustomersController.$inject = ['$scope', 'customersService', 'appSettings'];

	angular.module('customersApp')
		.controller('CustomersController', CustomersController);
}());