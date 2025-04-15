const jogadorAtual = document.querySelector('.jogador-atual');
const celulas = document.querySelectorAll('.celula-tabuleiro');
const botaoReiniciar = document.getElementById('reiniciar');

let jogador = 'X';
let selecionado = [];

const contextosVitoria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function iniciarJogo() {
  selecionado = [];
  jogador = 'X';
  jogadorAtual.textContent = `Jogador da vez: ${jogador}`;

  celulas.forEach((celula) => {
    celula.textContent = '';
    celula.disabled = false;
    celula.classList.remove('vencedor');
  });
  celulas.forEach((celula, indice) => {
    celula.addEventListener('click', () => novaJogada(celula, indice), { once: true });
  });
}

function novaJogada(celula, indice) {
  if (celula.textContent !== '') return; 

  celula.textContent = jogador;
  celula.disabled = true;
  selecionado[indice] = jogador;

  if (verificarVencedor()) {
    encerrarJogo(`Jogador '${jogador}' venceu!`);
    return;
  }

  if (selecionado.filter(Boolean).length === 9) {
    encerrarJogo('Empate!');
    return;
  }

  jogador = jogador === 'X' ? 'O' : 'X';
  jogadorAtual.textContent = `Jogador da vez: ${jogador}`;
}

function verificarVencedor() {
  return contextosVitoria.some((sequencia) => {
    const venceu = sequencia.every((indice) => selecionado[indice] === jogador);
    if (venceu) {
      sequencia.forEach((indice) => {
        celulas[indice].classList.add('vencedor');
      });
    }
    return venceu;
  });
}

function encerrarJogo(mensagem) {
  jogadorAtual.textContent = mensagem;

  celulas.forEach((celula) => {
    celula.disabled = true;
  });

  setTimeout(iniciarJogo, 2000);
}

botaoReiniciar.addEventListener('click', iniciarJogo);

iniciarJogo();
