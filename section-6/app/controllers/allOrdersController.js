(function(){

	var AllOrdersController = function($scope, $log, ordersService, appSettings){

		$scope.orders = [];
		$scope.appSettings = appSettings;

		ordersService.getOrders()
			.then(function(response){
				$scope.orders = response.data;
			}, function errorCallback(response){
				$log.log(response.status +' - ' + response.data.error);
			});
	};

	AllOrdersController.$inject = ['$scope', '$log', 'ordersService', 'appSettings'];

	angular.module('customersApp')
		.controller('AllOrdersController', AllOrdersController);

})();