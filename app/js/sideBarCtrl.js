dinnerPlannerApp.controller('sideBarCtrl', function ($scope,$routeParams,Dinner) {
    
  $scope.setFullPrice = function(){
	  return Dinner.getTotalMenuPrice()*$scope.guestNumber()
  }

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.guestNumber = function() {
    return Dinner.getNumberOfGuests();
  }
  

  $scope.menuList = function () {
  	return Dinner.getFullMenu();
  }

  $scope.remove = function () {
    var target = event.target.id;
    Dinner.removeDishFromMenu(target);
  }
});

