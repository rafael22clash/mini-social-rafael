let likeCount = 0;
let dislikeCount = 0;
let curtido = false;
let descurtido = false;


// === SERVICE ( regras de negocio) 
function curtir() {
  if (curtido == false){
    likeCount++;
    curtido = true;
    

    if(descurtido == true){
      dislikeCount--;
      descurtido = false;
    

    }

  }else{
    likeCount--;
    curtido = false;
    
  }

}

function descurtir() {
  if(descurtido == false){
    dislikeCount++;
    descurtido = true;
    

    if(curtido == true){
      likeCount--;
      curtido = false;
      
    }

  }
  else{
    dislikeCount--;
    descurtido = false;
    
  }
}

// VIEWS (interface)===
function atualizarTela(){
  document.getElementById("likeCount").innerText = likeCount;
  document.getElementById("dislikeCount").innerText = dislikeCount;
}

//=== CONTROLLER intermediaçao evento/regra de negocio 


function clicarcurtir(){
  curtir;
  atualizarTela();
}

function clicardescurtir(){
  descurtir;
  atualizarTela();
}
// === EVENTOS ===
document.getElementById("likeBtn").addEventListener("click", clicarcurtir);
document.getElementById("dislikeBtn").addEventListener("click", clicardescurtir);

// == INICIALIZAÇÃO DE TELA ===

atualizarTela();