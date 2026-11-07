//step-1 : if any key pressed then level1+ key flashed 

let game_seq=[];
let user_seq=[];
let btns=["red","green","yellow","blue"]

let started = false;
let level=0;

let h2=document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started!");
        started=true;
        levelup();
    }
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
}


function levelup(){
    user_seq=[];
    level++;
    h2.innerText=`Level ${level}`
    let ran=Math.floor(Math.random()*4);
    let ran_clr=btns[ran]
    game_seq.push(ran_clr);
    console.log(`game sequence: ${game_seq}`)
    let ran_btn=document.querySelector(`.${ran_clr}`)
    console.log(ran_btn)
    btnflash(ran_btn)
} 

function check(idx){
    if(user_seq[idx]==game_seq[idx])
    {
        if(user_seq.length==game_seq.length){
            setTimeout(levelup,1000)
        }
    }
    else{
        h2.innerHTML=`Game Over. Your score was <b>${level}!</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";
        },150)
        reset()
    }
}


function btnPress(){
    btn=this;
    userflash(btn)
    userColor= btn.getAttribute("id")
    user_seq.push(userColor)
    check(user_seq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns)
{
    btn.addEventListener("click",btnPress)
}


function reset()
{
    started=false;
    game_seq=[];
    user_seq=[];
    level=0;
}