var DinnerView2 = function (container,model) {

	this.numberOfGuests = container.find("#numberOfGuests");
	this.price = container.find("#dinnerCost");

	//this.menuDish = container.find("#menu-dish");
	//this.menuDishCost = container.find("#menu-dish-cost");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	this.price = container.find("#dinnerCost");

	this.getAllDishes = container.find("#allDishes");

	//this.price.html(model.getTotalMenuPrice(listOfIngredients));

	this.numberOfGuests.html(model.getNumberOfGuests());
	this.price.html(model.getTotalMenuPrice());
	this.getAllDishes.html(model.getAllDishes("dessert"));


}