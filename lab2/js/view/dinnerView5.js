//ExampleView Object constructor
var DinnerView5 = function (container, model) {
	
	model.makeMenu();
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(201);

	var menu = model.getFullMenu();

	var num = model.getNumberOfGuests();

	$("#numberOfGuests").append('My dinner: ' + num + ' people');

	for (var i in menu) {
		dinnerCost(menu[i],model);
		}

	$("#totalCost").append('Total: ' + model.getTotalMenuPrice() + ' kr')
}
 
var dinnerCost = function(dish, model) {

	var cost = model.getDishPrice(dish.id);

	var dishContainer = $("#costSummary").append('<div class="dishOverview"></div>');
	dishContainer.append('<img src="images/' + (dish.image) + '"/>');
	dishContainer.append('<h2>' + dish.name + '</h2>');
	dishContainer.append(cost + " kr");
}