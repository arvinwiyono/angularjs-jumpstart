(function(){

	var OrdersController = function($scope, $routeParams){
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

		$scope.customers = [
			{
				id: 1,
				joined: '2000-12-02',
				name: 'John',
				city: 'Melbourne',
				orderTotal: 9.9956,
				orders: [
					{
						id: 1,
						product: 'Shoes',
						total: 9.9956
					}
				]
			}, 
			{
				id: 2,
				joined: '2016-01-04',
				name: 'Biondi',
				city: 'Surabaya',
				orderTotal: 14.321,
				orders: [
					{
						id: 2,
						product: 'Gaming mouse',
						total: 10.321
					},
					{
						id: 3,
						product: 'Timmy',
						total: 4
					}
				]
			}, 
			{
				id: 3,
				joined: '2002-07-21',
				name: 'Arvin',
				city: 'Alaska',
				orderTotal: 1.52,
				orders: [
					{
						id: 4,
						product: 'Egg',
						total: 1.52
					}
				]
			}, 
			{
				id: 4,
				joined: '2012-03-09',
				name: 'Yoga',
				city: 'Sydney',
				orderTotal: 200.22,
				orders: [
					{
						id: 5,
						product: 'Shampoo',
						total: 20	
					},
					{
						id: 6,
						product: 'Chives',
						total: 5	
					},
					{
						id: 7,
						product: 'Chicken karage',
						total: 50.22	
					},
					{
						id: 8,
						product: 'Trampoline',
						total: 124.78	
					}
				]
			}
		];

		init();
	};

	OrdersController.$inject = ['$scope', '$routeParams'];

	angular.module('customersApp')
		.controller('OrdersController', OrdersController);
}());