// === "BANCO DE DADOS (JSON Simulado)" === 

let post ={
  likeCount: 0,
  dislikeCount: 0,
  curtido: false,
  descurtido: false
}


// === SERVICE (regras de negócio)
function curtir() {
  if (post.curtido == false){
    post.likeCount++;
    post.curtido = true;
    

    if(post.descurtido == true){
      post.dislikeCount--;
      post.descurtido = false;
    }

  }else{
    post.likeCount--;
    post.curtido = false;
  }

}

function descurtir() {
  if(post.descurtido == false){
    post.dislikeCount++;
    post.descurtido = true;
    

    if(post.curtido == true){
      post.likeCount--;
      post.curtido = false;
    }

  }
  else{
    post.dislikeCount--;
    post.descurtido = false;
  }
}

// === API SIMULADA ===

function getPost(){
  return post;
}
function likePost(){
  curtir ();
  return post;
}
function dislikePost(){
  descurtir ();
  return post;
}

//=== VIEWS (interface)===

function atualizarTela(dados){
  document.getElementById("likeCount").innerText = dados.likeCount;
  document.getElementById("dislikeCount").innerText = dados.dislikeCount;
}

//=== CONTROLLER (intermediação evento/regras de negócio)

function clicarCurtir(){
  let dados = likepost();
  atualizarTela(dados);
}
function clicarDescurtir(){
  let dados = dislikepost();
  atualizarTela(dados);
}


// === EVENTOS ====
document.getElementById("likeBtn").addEventListener("click", clicarCurtir);
document.getElementById("dislikeBtn").addEventListener("click", clicarDescurtir);

// === INICIALIZAÇÃO DE TELA ===

atualizarTela(getPost());