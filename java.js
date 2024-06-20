let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompchoice = () =>{
    const options = ["rock" ,"paper" ,"scissor"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
    
}
const showwinner=(userWin)=>{
    if(userWin){
    userscore++;
     userScorePara.innerText = userscore;
    msg.innerText = "You WIN !!";
    msg.style.backgroundColor = "green"; 
}
    else{
        compscore++;
        compScorePara.innerText = compscore;
       msg.innerText = "You Lose";
       msg.style.backgroundColor = "red"; 
    }
}
const drawgame = () =>{
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "black"; 
}
const playgame = (userchoice)=>{
        const compchoice = gencompchoice();
        if(userchoice === compchoice){
            drawgame();
        }
        else {
            let userWin = true;
        if(userchoice === "rock"){
            userWin = compchoice === "paper"?false:true;
        }
        else if(userchoice == "scissor"){
            userWin = compchoice === "rock"?false:true;
           
        }
        else {
            userWin = compchoice === "scissor"?false:true;
        }
        showwinner(userWin);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
        
     })
}
);
