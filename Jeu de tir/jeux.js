var testbouton2=false
var testbouton=false 
var bouletX = 350;
var bouletY=600;
var dx = 0;
var dy = 0;
var lol=0;
var limite = 0;
var score=0
var yoo=400
var enfin
var canon =0
var angle=90
let timer = 30
function setup(){

	createCanvas (800, 600);
     run = createButton('aide');
      run.position(25, 250);
      run.mousePressed(aide);
     run = createButton('Commencer');
      run.position(25, 200);
      run.mousePressed(Lancer); 

function Lancer(){
 if( testbouton==false){
 testbouton=true;
}
}
function aide(){
 if( testbouton2==false){
 testbouton2=true;
}
}
}
 


	function draw() {
        if(testbouton2==true){
	  textSize (15);
	text("appuyez sur les fleches directionnel pour faire tourner le canon",10,50);
	textSize (15);
	text("Appuyer sur t pour tirer  ",10,80);
	textSize (15);
	text("touchez les boules pour faire un maximum de points ",10,110);
	textSize (15);
	text("appuyez sur Commencer et bon jeu",10,140);
        }
    if(testbouton==true){

        background(200, 200, 255); 
		 textSize(15);
  text(timer, width/2, height/2);
        text("score=  "+score,550,400);
         
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
	  textSize (25);
    text("GAME OVER", width/2, height*0.7);
	exit()
  }
  

  
   if (dist(bouletX, bouletY, lol, limite) < 30) {
    limite = 620
    score=score+1
  }   
  
 fill(0)
 ellipse(lol,limite,20,20)
 
 	if (limite==600||limite==0||limite==601||limite==602||limite==620||limite==604||limite==605||limite==606||limite==607||limite==608){
		enfin=random(1,5)
		yoo=600+enfin
		limite=1
		lol=random(20,750);
	}  
     bouletX = bouletX+dx;
  bouletY = bouletY+dy;

 
     fill(231);
 
  ellipse(bouletX, bouletY, 20, 20);
  
  fill(0)
 rect(310,590,80,10);
  canon=(-angle*PI/180)
 
  push();
  translate(350, 600);
  rotate(canon);  
  rect(0, -10, 50, 20);
  pop();
  limite=limite+3

}
	}
function keyPressed (){
    if (keyCode == 39) {
angle=angle-10
   }
   if (keyCode == 37) {
angle=angle+10
   }
     if (keyCode == 84 ) {
    // Position de dÃƒÂ©part du boulet
    bouletX=(cos(-angle*PI))*350;
    bouletY = (sin(-angle*PI))+600;
    // vitesse initiale du boulet 
    dx = 15* cos(-angle*PI/180);
    dy = 15* sin(-angle*PI/180);
  }
}
    
    
  
	
	 document.write(' </a></center></br><center><a class="lien" href="javascript:location.reload();">Nouvelle partie</a></center>')