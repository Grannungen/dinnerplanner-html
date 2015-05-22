dinnerPlannerApp.controller('SummaryCtrl', function ($scope,Dinner) {
    $scope.fullMenuList = function () {
      console.log(Dinner.getFullMenu());
      return Dinner.getFullMenu()
    }	

});