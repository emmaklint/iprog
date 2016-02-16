var DinnerView2 = function (container,model) {

	this.numberOfGuests = container.find("#numberOfGuests");

	//this.menuDish = container.find("#menu-dish");
	//this.menuDishCost = container.find("#menu-dish-cost");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	this.price = container.find("#dinnerCost");
	this.DishCost = container.find("#dish-cost");
	this.DishName=container.find("#dish-name");


	model.makeMenu();
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	//model.addDishToMenu(201);

	var menu = model.getFullMenu();
	var dishprice=model.getDishPrice(1);
	var dishprice2=model.getDishPrice(100);

	this.DishName.append("<div>"+menu[0].name+"</div>");
	this.DishName.append("<div>"+menu[1].name+"</div>");


	this.DishCost.append("<div>"+dishprice+" SEK"+"</div>");
	this.DishCost.append("<div>"+dishprice2+" SEK"+"</div>");


	//this.DishCost.append("<div>"+"0 SEK"+"</div>");
	//this.DishName.append("<div>"+"pending"+"</div>");
	

	this.numberOfGuests.html(model.getNumberOfGuests());
	this.price.append("Total cost"+ model.getTotalMenuPrice());


}
