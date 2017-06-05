var bolas = [];

function preload(){
	//borda_som = loadSound('assets/ping_pong_borda.mp3');
	raquete_som = loadSound("rebatida.mp3");
}
function setup() { 
  createCanvas(400, 400);
    player1 = new Players(1);
    player2 = new Players(2);
} 

function draw() { 
    background(0, 89, 100);
    stroke(255);
    line(0,35,width,35);
    
    for(i=0;i<bolas.length;i++){
        bolas[i].show();
        if(bolas[i].pong()){
        	if(bolas[i].pontoPp1){
        		player1.score+=1;
        	}else{
        		player2.score+=1;
        	}
        	bolas.splice(i,1);
        	break;
        }

        if(bolas[i].colide(player1)){
            bolas[i].rebate();
            raquete_som.play();
        }

        if(bolas[i].colide(player2)){
            bolas[i].rebate();
            raquete_som.play();
        }
    }
    player1.move();
    player2.move();
    player1.show();
    player2.show();
}

function mousePressed(){
    bolas.push(new Bola(mouseX,mouseY));
}