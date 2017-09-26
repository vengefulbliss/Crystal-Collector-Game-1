/*
Pseudo Code

Set all variables to zero (total, counter, average)

Request user to input the first number; save inputed number as 'total'
Increment counter by 1 save as counter
Request user to input next number
Add inputted number to total
Continue at step 3 until all numbers are entered and added to total
Divide total by counter
Display results as average


*/



/*
Game Variables
*/

/*var gem1;
var gem2;
var gem3;
var gem4;
*/
var gemValues = [1,2,3,4,5];
var alreadyChoosenValues =[];
var total =0;
var win;
var loss;
var target;

function randomNumGenerator(num){
	return Math.floor(Math.random()*num);

}


target = randomNumGenerator(26);
target =5;

function gameSetup(){
while (alreadyChoosenValues.length !=4) {
	var gemIndex = randomNumGenerator(gemValues.length);
	var gemRandomNum = gemValues[gemIndex];
	if(alreadyChoosenValues.indexOf(gemRandomNum) === -1){
		alreadyChoosenValues.push(gemRandomNum);
	}
	//console.log(alreadyChoosenValues); 
}
}
gameSetup();

gem1 = alreadyChoosenValues[0];
gem2 = alreadyChoosenValues[1];
gem3 = alreadyChoosenValues[2];
gem4 = alreadyChoosenValues[3];
//console.log(gem1,gem2,gem3,gem4);



function winning(){
	if(total === target){
	win = win+1;
	console.log("win");
	}
}

function loss(){
	if(total > target){
	console.log("loss");
	loss = loss+1;
	}
}

function check(){
	if(total < target){
	console.log("working");
	}
}

function startOver(){

}






//Function


//Main

$(document).ready(function() {
	
      // Here we use jQuery to select the header with "click-me" as its ID.
      // Whenever it is clicked...
      $("#gem1HTML").on("click", function() {

        // ... we trigger an alert.
        total = total +gem1;
        console.log(total);
        winning();
        loss();
      });

        $("#gem2HTML").on("click", function() {

        // ... we trigger an alert.
        total = total +gem2;
        console.log(total);
        winning();
        loss();
      });


         $("#gem3HTML").on("click", function() {

        // ... we trigger an alert.
        total = total +gem3;
        console.log(total);
        winning();
        loss();
      });

          $("#gem4HTML").on("click", function() {

        // ... we trigger an alert.
        total = total +gem4;
        console.log(total);
        winning();
        loss();
      });

      

    });

console.log(target);

