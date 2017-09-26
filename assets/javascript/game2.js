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
 Variables
*/


var gemValues = [1,2,3,4,5];
var win =0;
var loss =0;
var alreadyChoosenValues;
var total;
var target;

//Functions
function randomNumGenerator(num){
	return Math.floor(Math.random()*num);
}

//Initalize the entire game
function gameSetup(){
	total =0;
	target = randomNumGenerator(31);

	//check to see if the generator picks 0
	if(target === 0){
		target = randomNumGenerator(31);

	}
	//document.getElementById('randomNumElm').innerHTML=target; 
	$('#randomNumElm').html(target);
	//document.getElementById('userScoreElm').innerHTML="Your total score is: " ;
	$('#userScoreElm').html("Your total score is: ");
	
	alreadyChoosenValues =[];
	
	while (alreadyChoosenValues.length !=4) {
		var gemIndex = randomNumGenerator(gemValues.length);
		var gemRandomNum = gemValues[gemIndex];
		if(alreadyChoosenValues.indexOf(gemRandomNum) === -1){
			alreadyChoosenValues.push(gemRandomNum);
		}
	//console.log(alreadyChoosenValues); 
	}

	gem1 = alreadyChoosenValues[0];
	gem2 = alreadyChoosenValues[1];
	gem3 = alreadyChoosenValues[2];
	gem4 = alreadyChoosenValues[3];
	console.log(gem1,gem2,gem3,gem4);

}


function gameStatus(){
	if(total === target){
		win = win+1;
		//console.log("win");
		document.getElementById('winHTML').innerHTML="Win: " +win; 
		gameSetup();
	}

	if(total > target){
		loss = loss+1;
		//console.log(loss);
		document.getElementById('lossHTML').innerHTML="Loss: " + loss; 
		gameSetup();
	}
}

//Main

gameSetup();


$(document).ready(function() {

	
      // Here we use jQuery to select the header with "click-me" as its ID.
      // Whenever it is clicked...
      //$("#randomNumElm").inner(target);
      $("#gem1HTML").on("click", function() {

        // ... we trigger an alert.
        total = total +gem1;
        console.log(total + " user total");
        document.getElementById('userScoreElm').innerHTML="Your total score is: " + total; 
        
        gameStatus();
      });

        $("#gem2HTML").on("click", function() {

        // ... we trigger an alert.
        total = total +gem2;
        console.log(total + " user total");
        document.getElementById('userScoreElm').innerHTML="Your total score is: " + total;
        gameStatus();
      });


         $("#gem3HTML").on("click", function() {

        // ... we trigger an alert.
        total = total +gem3;
        console.log(total + " user total");
        document.getElementById('userScoreElm').innerHTML="Your total score is: " + total;
        gameStatus();
      });

          $("#gem4HTML").on("click", function() {

        // ... we trigger an alert.
        total = total +gem4;
        console.log(total + " user total");
        document.getElementById('userScoreElm').innerHTML="Your total score is: " + total;
        gameStatus();
      });

      

    });

console.log(target);

