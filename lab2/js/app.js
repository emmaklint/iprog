$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var type = "main dish";
	var filter = null;

	model.makeMenu();
	model.setNumberOfGuests(4)
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(201);
	
	//And create the needed controllers and views

	// var exampleView = new ExampleView($("#exampleView"),model);
	//vardinnerView1=new DinnerView1($(".container"),model)
	var dinnerView2 = new DinnerView2($("#left-column"),model);
	// var dinnerView3 = new DinnerView3($("#right-column"),model,type,filter);
	var dinnerView4 = new DinnerView4($("#right-column"), model);
	// var dinnerView5 = new DinnerView5($("container"), model);
	//var dinnerView6 = new DinnerView6($("container"), model);


});