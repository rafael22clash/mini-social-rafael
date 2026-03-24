let likeCount = 0;
let desCount = 0;

let curtido = false; // flag booleana
let descurtido = false;

function curtir() {

 if(curtido == false){
    likeCount++;
    curtido = true;
    document.getElementById("likeCount").innerText = likeCount;
 }else{
    likeCount--;
    curtido = false;
    document.getElementById("likeCount").innerText = likeCount;
 }
}



 function deslike () {
if(descurtido == false){
    desCount++;
    descurtido = true;
    document.getElementById("desCount").innerText = desCount;
 }else{
    desCount--;
    descurtido = false;
    document.getElementById("desCount").innerText = desCount;
 }
  
}

document.getElementById("likeBtn").addEventListener("click", curtir);
document.getElementById("desBtn").addEventListener("click", deslike);