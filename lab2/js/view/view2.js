var View2 = function (container,model) {
		
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.price = container.find("#dinnerCost");

	this.numberOfGuests.html(model.getNumberOfGuests());
	this.price.html(model.getTotalMenuPrice());
}