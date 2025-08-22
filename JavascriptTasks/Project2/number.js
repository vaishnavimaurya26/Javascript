let randomNum =Math.floor(Math.random() * 10)   +   1;
let attempts = 0;

function checkGuess(){
let guess = parseInt(document.getElementById("guessInput").value);
attempts++;

if(guess === randomNum){
    document.getElementById("result").innerText = "Congratulations! You guessed the number!";
} else if(attempts > randomNum){
    document.getElementById("result").innerHTML = "TOO high! try again.";
} else {
    document.getElementById("result").innerHTML = "TOO low! try again.";
}
 document.getElementById("attempts").innerText = "Attempts: " + attempts;

}

function resetGame(){
    randomNum = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById("result").innerText = "";
    document.getElementById("attempts").innerText = "";
    document.getElementById("guessInput").value = "";
}