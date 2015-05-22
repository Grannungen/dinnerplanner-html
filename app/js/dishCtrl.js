// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope, $routeParams,Dinner) {
	
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter

   $scope.selected = function() {

 	  var pelle = Dinner.Dish.get({id:$routeParams.dishId}, function(data){
      var getPending=data;
      Dinner.thePendingDish(getPending);
      $scope.theDish = Dinner.returnPendingDish();
      $scope.ingredients = $scope.theDish.Ingredients;
  	},function(data){
    	$scope.status = "There was an error";
   	});

    
  }
  $scope.selected();

 $scope.getNumber = function(num) {
              return new Array(num);   
            }

  $scope.addDish = function (dishAdd) {
      Dinner.addDishToMenu();
		
  }


  // Check the app.js to figure out what is the paramName in this case
  
});