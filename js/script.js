let likeCount = 0;
let dislikeCount = 0;
let curtido = false;
let descurtido = false;

function curtir() {
  if (curtido == false){
    likeCount++;
    curtido = true;
    document.getElementById("likeCount").innerText = likeCount;

    if(descurtido == true){
      dislikeCount--;
      descurtido = false;
      document.getElementById("dislikeCount").innerText = dislikeCount;

    }

  }else{
    likeCount--;
    curtido = false;
    document.getElementById("likeCount").innerText = likeCount;
  }

}

function descurtir() {
  if(descurtido == false){
    dislikeCount++;
    descurtido = true;
    document.getElementById("dislikeCount").innerText = dislikeCount;

    if(curtido == true){
      likeCount--;
      curtido = false;
      document.getElementById("likeCount").innerText = likeCount;
    }

  }
  else{
    dislikeCount--;
    descurtido = false;
    document.getElementById("dislikeCount").innerText = dislikeCount;
  }
}



document.getElementById("likeBtn").addEventListener("click", curtir);
document.getElementById("dislikeBtn").addEventListener("click", descurtir);