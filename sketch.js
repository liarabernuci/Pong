// variáveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio= diametro/2
let velocidadex = 6;
let velocidadey = 6;
let colide=false;
let meusPontos=0;
let pontosOponente=0;
//variaveis raquete
let xRaq = 5;
let yRaq = 150;
let comprimentoRaq = 10;
let alturaRaq = 120;
//Variáveis Oponente
let raqueteOponentex = 585;
let raqueteOponentey = 150;
let velocidadeOponente;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisaoBordas();
  criarRaquete(xRaq,yRaq);
  movimentaRaquete();
  colideRaquete(xRaq,yRaq);
  placar ();
  pontos();
  colideRaquete(raqueteOponentex,raqueteOponentey)
  criarRaquete(raqueteOponentex, raqueteOponentey)
  
  movimentoRaqueteOponente();
}

function mostraBolinha(){circle(xBolinha, yBolinha, diametro);}
function movimentaBolinha(){  xBolinha = xBolinha + velocidadex;
  yBolinha = yBolinha + velocidadey;}

function colisaoBordas(){if(xBolinha+raio > width ||xBolinha-raio<0)
  velocidadex = velocidadex * -1;
  if(yBolinha+raio> height ||yBolinha-raio<0)
  velocidadey = velocidadey * -1;}


function criarRaquete(x,y){rect(x,y,comprimentoRaq,alturaRaq);}


function movimentaRaquete(){  if (keyIsDown(UP_ARROW)) {yRaq = yRaq - 10;
  }

 if (keyIsDown(DOWN_ARROW)) {yRaq = yRaq + 10;}}
function colideRaquete(x,y){//if (xBolinha-raio<xRaq+comprimentoRaq
// && yBolinha+raio>yRaq&& yBolinha - raio<yRaq+alturaRaq)
// {velocidadex = velocidadex * -1; }
  colide = collideRectCircle(x,y,comprimentoRaq,alturaRaq,xBolinha, yBolinha, diametro)
  
  if (colide){velocidadex = velocidadex * -1; }}

function movimentoRaqueteOponente(){
  velocidadeOponente = yBolinha- raqueteOponentey-(alturaRaq/2)+85
  raqueteOponentey= raqueteOponentey + velocidadeOponente
}
 function placar (){
   fill(255,255,255)
   textSize(30)
   text (meusPontos,100,50)
   text (pontosOponente,500,50)
 }

function pontos(){

 if (xBolinha-raio <=0){pontosOponente = pontosOponente+1}
 if (xBolinha+raio >=600){meusPontos=meusPontos+1}}

