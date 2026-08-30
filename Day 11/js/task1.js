var PlayerOneChoice = "paper";
var PlayerTwoChoice = "Scissors";
if (PlayerOneChoice === PlayerTwoChoice) {
  console.log("It's a tie! " + PlayerOneChoice + ".");

} else if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Scissors") {
  console.log("Player One wins!");
} else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") {
  console.log("Player One wins! ");
} else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Scissors") {

  console.log("Player One wins");
}
else{
     console.log("Player two wins ");
}