console.log("Hello World")

function getComputerChoice() {
    const choice=Math.random();
    if (choice<=0.33){
        return('rock');
    } else if (choice<=0.66) {
        return('paper');
    }  else {
        return ('scissors');
    }
}



function getHumanChoice() {
    const choice=prompt('What is your choice?');
    return choice;
}





function playGame (){
    
    let humanScore=0;
    let computerScore=0;
    const score = document.querySelector('#score');
    const results = document.querySelector('#results');
    const rockButton = document.querySelector('#rock');
    const paperButton = document.querySelector('#paper');
    const scissorsButton = document.querySelector('#scissors');


    function playRound (human,computer) {
        human=human.toLowerCase();
        if (human===computer){
            results.textContent='Draw!';
        } else if ((human==='rock'&&computer==='scissors')||(human==='scissors'&&computer==='paper')||(human==='paper'&&computer==='rock')){
            results.textContent='You win! '+human+' beats '+computer;
            humanScore +=1;
        } else {
            results.textContent='You lose! '+computer+' beats '+human;
            computerScore+=1;
        }


        score.textContent =
            'Player: ' + humanScore + ' | Computer: ' + computerScore;

        if (humanScore===5) {
        results.textContent = 'Congrats! You win!';
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

    }   else if (computerScore===5) {
        results.textContent='Unfortunately! Computer wins!';
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

    }
    
}
    

    

    rockButton.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
    });

    paperButton.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
    });

    scissorsButton.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
    });
   
    
    

    
}
playGame();
