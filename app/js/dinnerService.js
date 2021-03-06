// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource, $cookieStore) {

  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'dvxL42eEy92cbUd38UPFF5j8VG7f501n'});
  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:'dvxL42eEy92cbUd38UPFF5j8VG7f501n'});
  
  this.getMenuList = function(){
	  menuListID = $cookieStore.get('menuListIDs');
	  if ($cookieStore.get('menuListIDs') == undefined){
		  menuListID = [];
	  }
	  var menuList = [];
	  for (var j=0; j < menuListID.length ; j++){
		  var savedDish = this.Dish.get({id:menuListID[j]});
		  menuList.push(savedDish);
	  }
	  return menuList;
  }
  
  this.getNumberOfGuests = function() {
	  if ($cookieStore.get('nrOfGuests') != undefined){
		  var guestNumber = $cookieStore.get('nrOfGuests');
	  } else {
		  var guestNumber = 0;
	  }	
	  return guestNumber;
  }
  
  var observerArray = [];
  var menuListID = [];
  var menuList = this.getMenuList();
  var guestNumber = this.getNumberOfGuests();
  var PendingDish;
  var menuArray;
  var dishType;
  

  
  this.setType = function(data){
    dishType = data;
  }

  this.getType = function(){
    return dishType;
  }

  this.pendingType = function(arrayOfPend) {
    menuArray = arrayOfPend;
  }

  this.returnPendingArray = function() {
    return menuArray;
  }
  
  this.menuItems = function(){
    var menuItemID = [];
    for(key in dishes){
      menuItemID.push(dishes[key].id);
    };
    return menuItemID;
  }
  
  //TODO Lab 2 implement the data structure that will hold number of guest
  // and selected dinner options for dinner menu
  
  this.setNumberOfGuests = function(num) {
    if (guestNumber >= 0 && num != -1) {
      guestNumber = num;
	  $cookieStore.put('nrOfGuests', guestNumber);
    };
  }
  // should return 
 
      //TODO Lab 2
  
  
  this.thePendingDish = function(dish) {
    PendingDish = dish; 
  }
  
  this.returnPendingDish = function() {
    return PendingDish;
  }

  //Returns the dish that is on the menu for selected type 
  this.getSelectedDish = function(type) {
    var selDish = type;
    for (var i = 0; i < menuList.length; i++) {
      if (menuList[i].type == selDish) {
        return menuList[i];
      }     
    };
  }

  //Returns all the dishes on the menu.
  this.getFullMenu = function() {
    return menuList;
  }

  //Returns all ingredients for all the dishes on the menu.
  this.getAllIngredients = function() {
    for (var i = 0; i < menuList.length; i++) {
      for (var k = 0; k < menuList[i].Ingredients.length; k++) {
      };
    };
    //TODO Lab 2
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalMenuPrice = function() {
    var sumIng = 0;
	if (menuList == undefined){
		menuList = [];
	}
	for (var i = 0; i < menuList.length; i++) {
		if (menuList[i].Ingredients == undefined){
			return sumIng;
		}
	  for (var j = 0; j < menuList[i].Ingredients.length; j++) {
		sumIng = sumIng + 1;
		}
	}
    return sumIng;  
  }
  
  this.getPriceOfDish = function(dish){
	  if (this.returnPendingDish() != undefined){
		  var sumIng = 0;
		  
		  for (var i = 0; i < dish.Ingredients.length; i++) {
			sumIng = sumIng + 1;
			}
		  return sumIng
	  }
  }
  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function() {
    for (var i = 0; i < menuList.length; i++) {
      if (menuList[i].Category == PendingDish.Category) {
        this.removeDishFromMenu(menuList[i].RecipeID);}
      }
	menuListID.push(PendingDish.RecipeID);
	console.log(menuListID);
	$cookieStore.put('menuListIDs', menuListID);
    menuList.push(PendingDish);
  }
  
  this.removeDishFromMenu = function(id) {
    var removeDish = id;
    for (var i = menuList.length - 1; i >= 0; i--) {
      if (menuList[i].RecipeID == removeDish) {
        var i = menuList.indexOf(menuList[i]);
        if(i != -1) {
          menuList.splice(i, 1);
		  menuListID.splice(i, 1);
		  $cookieStore.put('menuListIDs', menuListID);
        }
        else {
          return
        }
      };
    };
  }
  

  //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
  //you can use the filter argument to filter out the dish by name or ingredient (use for search)
  //if you don't pass any filter all the dishes will be returned
  
  
  



  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details





  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});