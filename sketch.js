
var menina, meninaImg

var floresta, florestaImg

var chao , chaoImg

var obstaculo1, obstaculo2, obstaculo3, obstaculogrupo;

var score=0;
var pontos;

var invisibleGround;

var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
    meninaImg = loadImage("menina.png")
    florestaImg = loadImage("floresta1.png")
    chaoImg = loadImage("chão.jpg")

    //carregar imagem dos obstaculos 1, 2, 3 ;
    obstaculo1 = loadImage("cacto1.png")
    obstaculo2 = loadImage("1f335.png")
    obstaculo3 = loadImage("cacto2.png")

}

function setup() {
 createCanvas(1000,600)


    floresta = createSprite(300,300);
    floresta.addImage("floresta",florestaImg);
    floresta.velocityX= -5;
    floresta.scale =0.8

    menina = createSprite(179,530,20,20)
    menina.addImage("menina",meninaImg)
    menina.scale = 0.4;

    chao = createSprite(500,585)
    chao.addImage("chao", chaoImg)
    chao.velocityX = -5
    chao.scale = 0.5


    obstaculogrupo = new Group();

    invisibleGround = createSprite(500,600,1000,10);
    invisibleGround.visible = false;

}

function draw() {

    background("pink")
     gerarObstaculo();
      
    score = score + Math.round(getFrameRate()/60);


    if (floresta.x < 300){
        floresta.x = 800
      }
      if(chao.x <300){
        chao.x = 600
      }


      if(keyDown("space")&& menina.y >= 100) {
        menina.velocityY = -12;
       
    }
      

    menina.velocityY = menina.velocityY +1;

    menina.collide(invisibleGround)

    drawSprites()
    textSize(20)
    fill("red")
    text("desenvolvido por : Anna Dávilla ",50,40)
    text("pontuação: "+score,800,40)
}
      
           

function gerarObstaculo(){
    if (frameCount % 90 === 0){
      var obstaculo = createSprite(1000,500,10,40);
      obstaculo.scale = 0.08
      obstaculo.velocityX = -6
      
       //gerar obstáculos aleatórios
       var rand = Math.round(random(1,3));
       switch(rand) {
         case 1: obstaculo.addImage(obstaculo1);
                 break;
         case 2: obstaculo.addImage(obstaculo2);
                 break;
         case 3: obstaculo.addImage(obstaculo3);
                 break;
         default: break;
       }
      
       //atribua dimensão e tempo de vida aos obstáculos          
       obstaculo.scale = 0.3;
       obstaculo.lifetime = 300;
      
      //adicione cada obstáculo ao grupo
       obstaculogrupo.add(obstaculo);
    }
   }
   