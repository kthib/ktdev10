// Krystal Thibault
// Lucky Sevens
// Date Due: 02.20.20
// Whew! Went over modules many times before resorting to help from the internet. JavaScript is fun, but there are some big concepts... I think I'm finally getting the hang of it... feedback welcome!



// Program rolls a virtual pair of dice
function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function play(){
	var userInput = Number(document.forms["luckySevens"]["bet"].value);
	var currentValue = userInput; //user's bet
	var firstRoll; //roll dice 1
	var secondRoll; //roll dice 2
	var diceSum; //add the dice rolls together 
	var maxWinnings = 0; //most money won on a single roll
	var rolls = 0; //number or rolls before going broke
	var rollsAtMax = 0; //roll count at highest amount won

    //User must enter value more than 0
	if (currentValue <= 0 || currentValue > 10000) {
		alert("Minimum $0, Maximum $10,000"); // or they will get an alert. included 10,000 because higher amounts could freeze up the website and ruin the user experience
	} else {
		while (currentValue > 0) {
			firstRoll = rollDice();
			secondRoll = rollDice();
            //If the sum of the 2 dice is equal to 7,
			diceSum = firstRoll + secondRoll;
			//Below gives you total rolls and highest win counts
            rolls++;
			if (diceSum != 7) {
				currentValue -= 1; //player loses $1
				console.log("Lose $1");
			} else {
				currentValue += 4; //player wins $4
				console.log("Win $4!");
                
        if (currentValue > maxWinnings){
            maxWinnings += (currentValue-maxWinnings);
            rollsAtMax = rolls;
				}
			}
		}
	}
	
// Hidden results table
document.getElementById("results").style.display = "block";
// Text change on button
document.getElementById("submitButton").innerText = "Play Again!";

// Results table
document.getElementById("startBet").innerText = userInput;
document.getElementById("numRolls").innerText = rolls;
document.getElementById("maxWon").innerText = maxWinnings;
document.getElementById("maxRolls").innerText = rollsAtMax;
return false;
}