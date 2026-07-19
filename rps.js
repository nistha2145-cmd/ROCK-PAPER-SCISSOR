let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#computer-score");

const genCompChoice=()=>{
    const options =["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
};

const drawGame=()=>{
    console.log("DRAW");
     msg.innerText="GAME DRAW!";
     msg.style.backgroundColor="grey";
};

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("YOU WIN!");
        msg.innerText="YOU WIN!";
        msg.style.backgroundColor="green";
    }
    else{
       compScore++;
       compScorePara.innerText=compScore;
       console.log("YOU LOSE!");
       msg.innerText="YOU LOSE!";
       msg.style.backgroundColor="red";
    }
    
};


const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);

    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);


    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin);
}
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        console.log("choice was clicked",choiceId);
        playGame(choiceId);
    });
});