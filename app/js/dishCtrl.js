// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
	
	$scope.DishCtrl = {
		dish: Dinner.returnPendingDish()

	}
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
   console.log($routeParams.dishId);

   $scope.selected = function() {

 	  var pelle = Dinner.Dish.get({id:$routeParams.dishId}, function(data){
      var getPending=data;
      Dinner.thePendingDish(getPending);
      $scope.theDish = Dinner.returnPendingDish();

  	},function(data){
    	$scope.status = "There was an error";
   	});

    
  }
  $scope.selected();
  // Check the app.js to figure out what is the paramName in this case
  
});