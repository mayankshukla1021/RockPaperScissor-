function computerPlay()
{
 let s = Math.floor(Math.random()*3)
  if(s==0)
 {
   return("rock");
  }
  if(s==1)
  {
   return("paper");
  }
  if(s==2)
  {
  return("scissor");
  }
}

function playRound(ps)
{
let cp=computerPlay();
console.log(cp);



if(cp=="rock" && ps =="rock")
  console.log("tie");
  else if(cp=="rock" && ps=="paper")
  console.log("player win");
  else if(cp=="rock" && ps=="scissor")
  console.log("computer win");
  else if(cp=="paper" && ps=="rock")
  console.log("computer win");
  else if(cp=="paper" && ps=="paper")
  console.log("tie");
  else if(cp=="paper" && ps=="scissor")
  console.log("player win");
  else if(cp=="scissor" && ps=="rock")
  console.log("player win");
  else if(cp=="scissor" && ps=="paper")
  console.log("computer wins")
  else if(cp=="scissor" && ps=="scissor")
  console.log("tie");



}
function playerSelectionR()
{
  let i=document.getElementById("rock").value;
      playRound(i);
}
function playerSelectionP()
{
  let i=document.getElementById("paper").value;
      playRound(i);
}
function playerSelectionS()
{
  let i=document.getElementById("scissor").value;
      playRound(i);
}