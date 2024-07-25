var score = 0;
var timer = 11;
var hits;

function makingBubble(){
    var clutter = "";

for(var i=0; i<85; i++){
    
    var rn = Math.floor(Math.random() * 10);
    clutter+= `<div id="circle"><h1>${rn}</h1></div>`;
}

document.querySelector("#btm").innerHTML=clutter;

}

function setScore(newscore){
    score = newscore;
    document.querySelector("#box1").textContent=score;
}

function setTimer(){
    setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#box2").textContent=timer;
    }
    else{
        document.querySelector("#btm").innerHTML='<h1> Game score:- ${Score}</h1>';
    }  
    },1000);
}

function setHit(){
    hits=Math.floor(Math.random()*10);
    document.querySelector("#box3").textContent=hits;
}



function MainKAm(){
    document.querySelector("#btm").addEventListener("click",function(dets){
        if(Number(dets.target.textContent)===hits){
            setScore(score+=10);
            setHit();
            makingBubble();
        }
    });
}


makingBubble();
setScore(score);
setHit();
setTimer();
MainKAm();