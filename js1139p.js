
const  ateamscore = document.getElementById("ascore"); 
const  bteamscore = document.getElementById("bscore");
const  ateamsname = document.getElementById("ateams");
const  bteamsname = document.getElementById("bteams");
let    firstscore = 0

function aplus  () {
  ateamscore.innerHTML=firstscore+=1
};
function aminus () {
  if (firstscore > 0) {
    ateamscore.innerHTML=firstscore-=1
  }else {
    alert("The score can't be below 0")
  } 
};
function areset () {
  ateamscore.innerHTML=firstscore = 0;
};

function bplus  () {
  bteamscore.innerHTML=firstscore+=1 
};
function bminus () {
  if (firstscore > 0) {
    bteamscore.innerHTML=firstscore-=1
  }else {
    alert("The score can't be below 0")
  }  
};
function breset () {
  bteamscore.innerHTML=firstscore = 0;
};

function aupdate() {
  firstscore = Number(prompt("Update A team score"))
  if (isNaN(firstscore) || firstscore<0 || firstscore=="") {
    alert("Please enter only positive numbers")   
  }else {
    ateamscore.innerHTML=firstscore;
  }
};
function bupdate() {
  firstscore = Number(prompt("Update B team score"))
  if (isNaN(firstscore) || firstscore<0 || firstscore=="") {
    alert("Please enter only positive numbers")
  }else {
    bteamscore.innerHTML=firstscore;
  }
};

function achange() {
  const anewname = ateamsname.innerHTML=prompt("Please enter a new team name")
  if(anewname=="") {
    alert("Please don't leave empty")
  }else {
    anewname
  }
};
function bchange() {
  const bnewname = bteamsname.innerHTML=prompt("Please enter a new team name")
  if(bnewname=="") {
    alert("Please don't leave empty")
  }else {
    bnewname
  }
};

