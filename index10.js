// ROCK,PAPER & SCISSORS GAME:-

let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.getElementById("message")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#computer-score")

const gen_Comp_Choice = () => {
    const options = ["rock", "paper", "scissors"]
    const random_Index = Math.floor(Math.random() * 3);
    return options[random_Index]
    //rock, paper, scissors

}

const drawGame = () => {
    console.log("Game was draw")
    message.innerText = " It's a Draw!";
    message.style.backgroundColor = "yellow";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore

        console.log("You Win")
        message.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        message.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compScorePara.innerText = compscore
        console.log("You Lose");
        message.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice= ", userChoice)

    // Generate computer choice.
    const compChoice = gen_Comp_Choice();
    console.log("comp choice = ", compChoice)

    if (userChoice == compChoice) {
        drawGame()
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;

        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }




}

choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        //   console.log("choice was clicked",choice);
        playGame(userChoice)
    });
});

