var DinnerView3 = function (container,model) {

	// Hämta antal gäster
	num = model.getNumberOfGuests();

	// Skicka in måltiden i dishInfo
	var dish = model.getDish(100);
	dishInfo(dish, model);
}

var dishInfo = function(dish, model) {
	// Skapa en div för hela rätten, lägg till titel, bild och beskrivning.
	// Hämta ut alla ingredienser med kostnad och lägg i separat div.
	// Hämta total kostnad



//NOTE TO SELF: GÖR SÅ ATT ALLA HÄMTAS UT!
	var dishContainer = $(".right-content").append('<div class="dishes"></div>');
	dishContainer.append('<img src="images/' + (dish.image) + '"/>');
	dishContainer.append('<h4>' + dish.name + '</h4>');
	dishContainer.append("<p>" + dish.description.slice(0,85) + "..."+"</p>");

}