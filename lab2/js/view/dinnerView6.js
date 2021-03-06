//ExampleView Object constructor
var DinnerView6 = function (container, model) {	

	var menu = model.getFullMenu();

	// Get number of guests and send to HTML
	var num = model.getNumberOfGuests();
	$("#numberOfGuests").html('My dinner: ' + num + ' people');
	$(".backButton").html('<button type="button" class="backButton">Go back and edit dinner</button>')


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

	// Using .append instead of .html because .html only contains the last info
	// you put in. Therefor, in this case .html would only show the last dish
	// since it can't create several items who looks the same.
	$("#dishSummary").append('<div class="dish">' + dishImg + '<div class="col-md-8">' + dishName + dishDesc + '</div></div>');
}