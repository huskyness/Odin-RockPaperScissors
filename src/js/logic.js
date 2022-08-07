function playRound(playerSelection) {
    let computerSelection = Math.floor(Math.random() * 3)+1;
    let options = {
        1:"rock",
        2:"paper",
        3:"scissors"
    }
    let textSelection = options[playerSelection]+' and computer choose was '+options[computerSelection];
    if((playerSelection == 1 && computerSelection == 3) || (playerSelection == 2 && computerSelection == 1) || (playerSelection == 3 && computerSelection == 2)){
        document.getElementById("result").innerHTML='You win! your choose was '+ textSelection;
    }else if(playerSelection == computerSelection){
        document.getElementById("result").innerHTML='Its a tie! your choose was '+ textSelection;
    }else{
        document.getElementById("result").innerHTML='You lose! your choose was ' + textSelection;
    }
}