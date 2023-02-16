let container = document.querySelector(".container")

let buton=document.getElementById("buton");
let allchar="0123456789ABCDEF";

buton.addEventListener("click",myFun);

function myFun(){
  let  randcol= "";
for(let i=0; i<6; i++){
   randcol += allchar[Math.floor(Math.random()*16)];
}
document.body.style.backgroundColor= "#"+randcol;
}