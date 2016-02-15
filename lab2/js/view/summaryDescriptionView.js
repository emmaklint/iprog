//ExampleView Object constructor
var SummaryDescriptionView = function (container, model) {
	
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

	var dishContainer = $("#summaryDescriptionView").append('<div class="dishOverview"></div>');
	dishContainer.append('<img src="images/' + (dish.image) + '"/>');
	dishContainer.append(dish.name);
	dishContainer.append(dish.description);
}