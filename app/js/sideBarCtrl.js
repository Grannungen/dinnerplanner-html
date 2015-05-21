dinnerPlannerApp.controller('sideBarCtrl', function ($scope,$routeParams,Dinner) {
  

  

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.guestNumber = function() {
    return Dinner.getNumberOfGuests();
  }
  

  $scope.menuList = function () {
  	return Dinner.getFullMenu();
  }


 

});

