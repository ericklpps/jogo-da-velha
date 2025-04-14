let celulasTabuleiro = document.querySelectorAll(".celula-tabuleiro");
let tabuleiro = document.getElementById("tabuleiro");
let statusJogo = document.getElementById("situacao-jogo");

document.addEventListener(celulasTabuleiro)

function capturaClique(e){    
    console.log("célula clicada")
}

celulasTabuleiro.forEach((umaCelula) => { 
    umaCelula.addEventListener('click', capturaClique); 
});