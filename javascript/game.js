$(document).ready(function() {
//Print the random number
var number = Math.floor(Math.random()*101);
if(number == 120 || number == 19) {
   // Code to show image
} else {
    $("#pb1").html(number);
};

//crystal buttons     
	$(".btn").on("click", function(){
  var numberOptions = [10, 5, 3, 7];
  for (var i = 0; i < numberOptions.length; i++);
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("src",);
});


    var crys1 = $("#crys1").val(1);
	  var crys2 = $("#crys2").val(3);
   	var crys3 = $("#crys3").val(7);
    var crys4 = $("#crys4").val(12);   
    $(".btn").on("click", function(){
        var sum = crys1 + crys2 + crys3 + crys4;
        $("#pb2").html("I need more time to complete this");         
    });







});

//var crys1 = parseInt(
//var crys2 = parseInt(
//var crys3 = parseInt(
//var crys4 = parseInt(