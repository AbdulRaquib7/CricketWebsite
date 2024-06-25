function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const odirandint = randomIntFromInterval(200, 320)
  console.log(odirandint)
  
  const odirandint1 = randomIntFromInterval(0,9)
  console.log(odirandint1)

  const odirandint2 = randomIntFromInterval(48,50)
  console.log(odirandint2)

  function randomIntFromInterval2(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const odi1randint = randomIntFromInterval2(200, 320)
  console.log(odi1randint)
  
  const odi1randint1 = randomIntFromInterval2(0,9)
  console.log(odi1randint1)

  const odi1randint2 = randomIntFromInterval2(45,50)
  console.log(odi1randint2)


  
 


//   document.querySelector(".team-score")[3].innerHTML..replace(/274-6 (50.0)/g, 'hi')
//   document.querySelector(".team-score2")[3].setAttribute("src","images/dice"+randomNumber1+".png");
document.getElementsByClassName("team-score")[2].innerHTML=odirandint +"-"+ odirandint1 + " (" + odirandint2 + ")";
document.getElementsByClassName("team-score2")[2].innerHTML=odi1randint +"-"+ odi1randint1 + " (" + odi1randint2 + ")";

if(odirandint > odi1randint){
  document.getElementsByClassName("result")[2].innerText="Sri Lanka won";
  document.getElementsByClassName("team-name2")[2].style.opacity="50%";
  document.getElementsByClassName("team-score2")[2].style.opacity="50%";

}

else if(odi1randint > odirandint){
  document.getElementsByClassName("result")[2].innerText="India won";
  document.getElementsByClassName("team-name")[2].style.opacity="50%";
  document.getElementsByClassName("team-score")[2].style.opacity="50%";
}

else if(odi1randint == odirandint){
  document.getElementsByClassName("result")[2].innerText="Match Draw";
}

function randomIntFromIntervalT20(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const t20randint = randomIntFromIntervalT20(120, 220)
console.log(t20randint)

const t20randint1 = randomIntFromIntervalT20(0,9)
console.log(t20randint1)

const t20randint2 = randomIntFromIntervalT20(19,20)
console.log(t20randint2)

function randomIntFromIntervalT201(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const t201randint = randomIntFromIntervalT201(120, 220)
console.log(t201randint)

const t201randint1 = randomIntFromIntervalT201(0,9)
console.log(t201randint1)

const t201randint2 = randomIntFromIntervalT201(19,20)
console.log(t201randint2)

document.getElementsByClassName("team-score")[1].innerHTML=t20randint +"-"+ t20randint1 + " (" + t20randint2 + ")";
document.getElementsByClassName("team-score2")[1].innerHTML=t201randint +"-"+ t201randint1 + " (" + t201randint2 + ")";

if(t20randint > t201randint){
  document.getElementsByClassName("result")[1].innerText="England won";
  document.getElementsByClassName("team-name2")[1].style.opacity="50%";
  document.getElementsByClassName("team-score2")[1].style.opacity="50%";

}

else if(t201randint > t20randint){
  document.getElementsByClassName("result")[1].innerText="Pakistan won";
  document.getElementsByClassName("team-name")[1].style.opacity="50%";
  document.getElementsByClassName("team-score")[1].style.opacity="50%";
}

else if(t201randint == t20randint){
  document.getElementsByClassName("result")[1].innerText="Match Draw";
}

function randomIntFromIntervalIPL(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const iplrandint = randomIntFromIntervalIPL(120, 220)
console.log(iplrandint)

const iplrandint1 = randomIntFromIntervalIPL(0,9)
console.log(iplrandint1)

const iplrandint2 = randomIntFromIntervalIPL(19,20)
console.log(iplrandint2)

function randomIntFromIntervalIPL1(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const ipl1randint = randomIntFromIntervalIPL1(120, 220)
console.log(ipl1randint)

const ipl1randint1 = randomIntFromIntervalIPL1(0,9)
console.log(ipl1randint1)

const ipl1randint2 = randomIntFromIntervalIPL1(19,20)
console.log(ipl1randint2)

document.getElementsByClassName("team-score")[3].innerHTML=iplrandint +"-"+ iplrandint1 + " (" + iplrandint2 + ")";
document.getElementsByClassName("team-score2")[3].innerHTML=ipl1randint +"-"+ ipl1randint1 + " (" + ipl1randint2 + ")";

if(iplrandint > ipl1randint){
  document.getElementsByClassName("result")[3].innerText="Royal Challengers Bangalore won";
  document.getElementsByClassName("team-name2")[3].style.opacity="50%";
  document.getElementsByClassName("team-score2")[3].style.opacity="50%";

}

else if(ipl1randint > iplrandint){
  document.getElementsByClassName("result")[3].innerText="Chennai Super Kings won";
  document.getElementsByClassName("team-name")[3].style.opacity="50%";
  document.getElementsByClassName("team-score")[3].style.opacity="50%";
}

else if(ipl1randint == iplrandint){
  document.getElementsByClassName("result")[3].innerText="Match Draw";
}
