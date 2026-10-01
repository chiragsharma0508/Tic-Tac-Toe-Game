let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true; //playerX.playerO
const winPatterns = [[0,1,2] ,[0,3,6] , [0,4,8] , [1,4,7] , [2,5,8] , [2,4,6] , [3,4,5] , [6,7,8] ];
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0 ;


// what if buttons are clicket ?
boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        console.log("box was clicked!");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count += 1;
        let isWinner = checkwinner();
        if(count == 9 && !isWinner){
            Draw();
        }
        
        
    })
})

// the above for loop creates an event listerner for all 9 boxes!

const disableBoxes = () =>{
        for(let box of boxes){
            box.disabled = true;
        }
}

const enableBoxes = () =>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
    }

//show winner
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}` ;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
}

// checking if someone won 
const checkwinner = () =>{
    for(let pattern of winPatterns){
        let pos1value = boxes[pattern[0]].innerText;       // suppose pattern is refering to [0,1,2]
        let pos2value = boxes[pattern[1]].innerText;       // pattern[0] -> 0.  pattern[1]-> 1.   pattern[2]-> 2.
        let pos3value = boxes[pattern[2]].innerText;       //boxes[pattern[0]] = boxes[0] ~~ refering to box 1!
        
        if(pos1value !="" && pos2value!="" && pos3value!=""){
            if(pos1value==pos2value && pos2value==pos3value){
                console.log("winner!");
                showWinner(pos1value);
                return true;
            }
        }
    }  
}
const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const Draw = () =>{
    msg.innerText = `Game Drawn!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);