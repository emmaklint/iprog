//ExampleView Object constructor
var DinnerView6 = function (container, model) {
	
	// Setting up a menu --> Remove in lab3 <--
	model.makeMenu();
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(201);

	var menu = model.getFullMenu();

	// Get number of guests and send to HTML
	var guest = model.getNumberOfGuests();
	$("#numberOfGuests").append('My dinner: ' + guest + ' people');


	// Send every dinner-object into dinnerPrep-method 
	// which gets all the relevant info about the objects.
	for (var i in menu) {
		dinnerPrep(menu[i]);
		}
	}
 
var dinnerPrep = function(dish) {
	// Creates a div which contains the objects name, image and description
	var dishImg = ('<div class="col-md-4 dishImage"><img src="images/' + (dish.image) + '"/></div>');
	var dishName = ('<h2>' + dish.name + '</h2>');
	var dishDesc = ('<p class="description">' + dish.description + '</p>');

	$("#dishSummary").append('<div class="dish">' + dishImg + '<div class="col-md-8">' + dishName + dishDesc + '</div></div>');
}