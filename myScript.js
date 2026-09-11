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

    function playRound (human,computer) {
        human=human.toLowerCase();
        if (human===computer){
            console.log('Draw!');
        } else if ((human==='rock'&&computer==='scissors')||(human==='scissors'&&computer==='paper')||(human==='paper'&&computer==='rock')){
            console.log('You win! '+human+' beats '+computer);
            humanScore +=1;
        } else {
            console.log('You lose! '+computer+' beats '+human);
            computerScore+=1;
        }
    
}
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());

    if (humanScore===computerScore) {
        console.log('Draw game!');
    } else if (humanScore > computerScore) {
        console.log ('Congrats! You win!');
    } else {
        console.log ('You lost the game!');
    }
    
}