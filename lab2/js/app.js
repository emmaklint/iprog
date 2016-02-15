$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	// var exampleView = new ExampleView($("#exampleView"),model);
	// var dinnerView1 = new DinnerView1($("#dinnerView1"),model);
	// var dinnerView2 = new DinnerView2($(".container"),model);
	// var dinnerView3 = new DinnerView3($("#dinnerView3"),model);
	// var dinnerView2 = new DinnerView2($("#left-column"),model);
	// var DinnerView3 = new DinnerView3($("#right-column"),model);
	var dinnerView4 = new DinnerView4($("container"), model);
	// var dinnerView5 = new DinnerView5($("container"), model);
	// var dinnerView6 = new DinnerView6($("container"), model);



});