let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#reset");
let msg_container = document.querySelector(".msg");
let strt_new = document.querySelector(".new");
let msg = document.querySelector("#text");
let clicks= "0";

let turn0=true;

let win_patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]





boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        // console.log("the button was clicked");
        if(turn0){
            box.classList.add("green");
            box.classList.remove("red");
            box.innerText="0";
            turn0=false;
            clicks++;
            draw(clicks);

        }
        else{
            box.classList.add("red");
            box.classList.remove("green");
            box.innerText="X";
            turn0=true;
            clicks++;
            draw(clicks);
        }
        box.disabled=true;
        winfnxn();
    })
})

const disable=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enable=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const game_Draw=()=>{
    msg.innerText=`No One Wins {DRAW}`;
    msg_container.classList.remove("hide");
    strt_new.classList.remove("hide");
    disable();
    clicks=0;
}

const resetGame=()=>{
    msg_container.classList.add("hide");
    strt_new.classList.add("hide");
    turn0=true;
    enable();
    clicks=0;
}

let showWinner=(winner)=>{
    msg_container.classList.remove("hide");
    strt_new.classList.remove("hide");
    msg.innerText=`The winner is ${winner}`;
    disable();
    clicks=0;
}

let draw =(value)=>{
    // console.log(value);
    if(value=="9"){
       game_Draw();
    }
}

let winfnxn =() =>{
    for (let pattern of win_patterns){
        // console.log(pattern[0],pattern[1],pattern[2]);       //index in boxes variable
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);    //the button on that position
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val!="" &&pos3Val!="")
        {
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                console.log(`Winner is ${pos1Val}`);
                showWinner(pos1Val);
            }                
        }
    }
}

//reset the game
btn.addEventListener("click",resetGame);
//strt new game
strt_new.addEventListener("click",resetGame);


