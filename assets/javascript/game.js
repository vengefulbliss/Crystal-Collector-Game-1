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
var win;
var loss;
var target;

function randomNumGenerator(num){
	return Math.floor(Math.random()*num);

}


target = randomNumGenerator(26);

while (alreadyChoosenValues.length !=5) {
	var gemIndex = randomNumGenerator(gemValues.length);
	var gemRandomNum = gemValues[gemIndex];
	if(alreadyChoosenValues.indexOf(gemRandomNum) === -1){
		alreadyChoosenValues.push(gemRandomNum);
	}
	
	console.log(alreadyChoosenValues);

    
}






//if(alreadyChoosenValues.indexOf(gemRandomNum) != -1){
	//gem1 = gemRandomNum;
	//console.log(gem1);
	//console.log(alreadyChoosenValues);

//}



/* pseudo code
- Randomly create a number the user should guess
- randomly add values to the gem (1 to 5)
-make sure each gem has a different value
- when the user clicks to add the gem value to users score
-if the user matches the random computer number value the user wins
-if the use goes over that value then the user losses
*/


//Function


//Main
/*
$(document).ready(function() {
	var randomNum = Math.floor(Math.random()*10);
	console.log(randomNum);

      // Here we use jQuery to select the header with "click-me" as its ID.
      // Whenever it is clicked...
      $("#click-me").on("click", function() {

        // ... we trigger an alert.
        alert("I've been clicked!");
      });

    });
    */