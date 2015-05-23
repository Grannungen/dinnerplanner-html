dinnerPlannerApp.controller('SummaryCtrl', function ($scope,Dinner) {
    $scope.fullMenuList = function () {
      return Dinner.getFullMenu()
    }	
	$scope.getTotalCost = function() {
		return Dinner.getTotalMenuPrice()*Dinner.getNumberOfGuests();
	}
});