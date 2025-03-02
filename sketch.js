function setup() {
  createCanvas(400, 400);
}

let xjogador1 = 0;
let xjogador2 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  keyReleased();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#D2EBB5");
  } else {
    background("rgb(238,178,178)");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("🍓", xjogador1, 100);
  textSize(40);
  text("🍍", xjogador2, 300);
}

function desenhaLinhaDeChegada() {
  rect(350, 0, 10, 400);
}

function keyReleased() {
  if (key == "a") {
    xjogador1 += 1;
  }
  if (key == "l") {
    xjogador2 += 1;
  }
}

function verificaVencedor() {
  if (xjogador1 > 350) {
    text("Jogador 1 venceu!!!", 20, 200);
    noLoop();
  }
  if (xjogador2 > 350) {
    text("Jogador 2 venceu!!!", 20, 200);
    noLoop();
  }
}
