//ExampleView Object constructor
var DishSummary = function (container, model) {
	
	model.makeMenu();
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(201);

	var menu = model.getFullMenu();

	var num = model.getNumberOfGuests();

	$("#numberOfGuests").append(num);

	for (var i in menu) {
		dinnerPrep(menu[i]);
		}
}
 
var dinnerPrep = function(dish) {

	var dishContainer = $("#dishSummary").append('<div class="dishOverview"></div>');
	dishContainer.append('<img src="images/' + (dish.image) + '"/>');
	dishContainer.append('<h2>' + dish.name + '</h2>');
	dishContainer.append(dish.description);
}