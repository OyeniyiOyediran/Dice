let diceIcon =document.getElementById("diceIcon")
let scoreBoard = document.getElementById("scoreBoard")
let modalDisplay= document.getElementById("modalDisplay");
diceIcon.addEventListener("click" , playerPlay);
diceIcon.addEventListener("click" , ret);
let restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click",restarted);
let scored ={
    playerScore:0,
    computerScore:0
}
// diceIcon.addEventListener("click",mnb);

function ret(){
    let y=playerPlay();
    let x=computerPlay();
    let pl=y.playerNumber;
    let cm = x.computerNumber;
    function winnerDeclare(pl , cm){
        if(y.playerNumber > x.computerNumber){
            scored.playerScore++;
            return "You Won";
        }
        else if(x.computerNumber > y.playerNumber){
            scored.computerScore++;
            return "Computer Won";
        }
        else {
            return "Draw";
        }
    }
    let final = winnerDeclare(y.playerNumber,x.playerNumber);
    modalDisplay.innerHTML=`<p id="myRoll">You Rolled  <span class="fa fa-dice-${y.playerAlphabet}"
     id="dicey"></span></p>
    <p id="computerRoll">Computer Rolled  <span class="fa fa-dice-${x.computerAlphabet}"
     id="dicey"></span></p>
    <p id="verdict">${final}</p>
    <button class="mx-auto d-block" id="modalDismiss" 
    data-dismiss="modal">Close</button>`
    scoreBoard.innerHTML=`
    <p id="computer">Computer : ${scored.computerScore}</p>
    <p id="player">Player : ${scored.playerScore}</p>`
}
function restarted(){
    scoreBoard.innerHTML=`
    <p id="computer">Computer : ${scored.computerScore = 0}</p>
    <p id="player">Player : ${scored.playerScore = 0}</p>` 
}




function playerPlay(){
    let randomer = Math.random();
    if(randomer < 0.17){
        return{
            playerNumber:1,
            playerAlphabet:"one"
        };
    }
        else if(randomer > 0.17 && randomer < 0.34){
            return{
                playerNumber:2,
                playerAlphabet:"two"
            };
    }
    else if(randomer > 0.34 && randomer < 0.51){
        return{
            playerNumber:3,
            playerAlphabet:"three"
        };
}
else if(randomer > 0.51 && randomer < 0.68){
    return{
        playerNumber:4,
        playerAlphabet:"four"
    };
}
else if(randomer > 0.68 && randomer < 0.85){
    return{
        playerNumber:5,
        playerAlphabet:"five"
    };
}
else{
    return{
        playerNumber:6,
        playerAlphabet:"six"
    };
}
}
function computerPlay(){
    let rand = Math.random();
    if(rand < 0.14){
        return{
            computerNumber:1,
            computerAlphabet:"one"
        };
    }
        else if(rand > 0.14 && rand < 0.29){
            return{
                computerNumber:2,
                computerAlphabet:"two"
            };
    }
    else if(rand > 0.29 && rand < 0.44){
        return{
            computerNumber:3,
            computerAlphabet:"three"
        };
}
else if(rand > 0.44 && rand < 0.58){
    return{
        computerNumber:4,
        computerAlphabet:"four"
    };
}
else if(rand > 0.58 && rand < 0.75){
    return{
        computerNumber:5,
        computerAlphabet:"five"
    };
}
else{
    return{
        computerNumber:6,
        computerAlphabet:"six"
    };
}
}


