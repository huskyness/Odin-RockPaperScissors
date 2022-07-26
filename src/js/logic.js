function playRound(playerSelection) {
    let computerSelection = Math.floor(Math.random() * 3)+1;
    if((playerSelection == 1 && computerSelection == 3) || (playerSelection == 2 && computerSelection == 1) || (playerSelection == 3 && computerSelection == 2)){
        document.getElementById("result").innerHTML='You win';
    }else if(playerSelection == computerSelection){
        document.getElementById("result").innerHTML='Same result';
    }else{
        document.getElementById("result").innerHTML='You lose';
    }
}