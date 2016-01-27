(function(){

	var AllOrdersController = function($scope, $log, ordersService, appSettings){

		$scope.orders = [];
		$scope.ordersTotal = 0.0;
		$scope.appSettings = appSettings;

		ordersService.getOrders()
			.then(function(response){
				$scope.orders = response.data;
				getOrdersTotal();
			}, function errorCallback(response){
				$log.log(response.status +' - ' + response.data.error);
			});

		var getOrdersTotal = function(){
			for(var i = 0; i < $scope.orders.length; i++){
				$scope.ordersTotal += $scope.orders[i].total;
			}
			$scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';
		}
	};

	AllOrdersController.$inject = ['$scope', '$log', 'ordersService', 'appSettings'];

	angular.module('customersApp')
		.controller('AllOrdersController', AllOrdersController);

})();