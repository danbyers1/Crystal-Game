//crystal variables
var crystal = {
  red:
   {
    name: "Red",
    value: 0
  },

  blue: {
    name: "Blue",
    value: 0
  },

  orange: {
    name: "Orange",
    value: 0
  },

  green: {
    name: "Green",
    value: 0
  },
};

//scores - Current and target
var currentScore = 0;
var targetScore = 0;

// wins and losses
var winCount = 0;
var lossCount = 0;

//random numbers and score functions

var randomNumber = function(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {
 currentScore = 0; 
 targetScore = randomNumber (19, 120);
 
 crystal.red.value = randomNumber(1,12);
 crystal.blue.value = randomNumber(1,12);
 crystal.orange.value = randomNumber(1,12);
 crystal.green.value = randomNumber(1,12);


$("#pb1").html(targetScore);
$("#pb2").html(currentScore);
}

var addCrystals = function(crystal) {

  currentScore = currentScore + crystal.value;

  $("#pb2").html(currentScore);

  checkScore();

}

var checkScore = function(){
 if(currentScore > targetScore){
  lossCount++;
  $("#lostScore").html(lossCount);
  startGame();
 } 
 else if (currentScore == targetScore){
  winCount++;
  $("#winScore").html(winCount);
  startGame();
 }

}




startGame();
//crystal buttons
$("#red").click(function(){
  addCrystals(crystal.red);
});

$("#blue").click(function(){
 addCrystals(crystal.blue);
});

$("#orange").click(function(){
 addCrystals(crystal.orange);
});

$("#green").click(function(){
 addCrystals(crystal.green);
});





//$(document).ready(function() {
//Print the random number
//var number = Math.floor(Math.random()*101);
//if(number == 120 || number == 19) {
   // Code to show image
//} else {
//    $("#pb1").html(number);
//};

////crystal buttons     
//	$(".btn").on("click", function(){
//  var numberOptions = [10, 5, 3, 7];
//  for (var i = 0; i < numberOptions.length; i++);
//  var imageCrystal = $("<img>");
//  imageCrystal.addClass("crystal-image");
//  imageCrystal.attr("src",);
//});


//    var crys1 = $("#crys1").val(1);
//	  var crys2 = $("#crys2").val(3);
//   	var crys3 = $("#crys3").val(7);
//    var crys4 = $("#crys4").val(12);   
//    $(".btn").on("click", function(){
//        var sum = crys1 + crys2 + crys3 + crys4;
//        $("#pb2").html("I need more time to complete this");         
//    });







//});

