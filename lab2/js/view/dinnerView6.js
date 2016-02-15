//ExampleView Object constructor
var DinnerView6 = function (container, model) {
	
	// Setting up a menu --> Remove in lab3 <--
	model.makeMenu();
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(201);

	var menu = model.getFullMenu();

	// Get number of guests and send to HTML
	var num = model.getNumberOfGuests();
	$("#numberOfGuests").append(num);


	// Send every dinner-object into dinnerPrep-method 
	// which gets all the relevant info about the objects.
	for (var i in menu) {
		dinnerPrep(menu[i]);
		}
	}
 
var dinnerPrep = function(dish) {
	// Creates a div which contains the objects name, image and description
	var dishContainer = $("#dishSummary").append('<div class="dishOverview"></div>');
	dishContainer.append('<img src="images/' + (dish.image) + '"/>');
	dishContainer.append('<h2>' + dish.name + '</h2>');
	dishContainer.append(dish.description);
}