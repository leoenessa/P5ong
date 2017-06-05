function Players(num){
	
	this.lado = 90;
	this.altura = 20;
	if(num==1){this.x=0;}
	else if(num==2){this.x=width-this.altura;}
	this.y=height/2-this.lado/2;
  
  this.score = 0;
  this.xscore = num==1 ? 10 : height-20;
	
	this.show = function(){
		noStroke();
		fill(255);
		rect(this.x,this.y,this.altura,this.lado);
    textSize(32);
		text(this.score, this.xscore, 30);
		fill(255, 255, 255);
	}
	
  
  this.move = function(){
    if(keyIsDown(UP_ARROW)){
      if(this.y-this.lado/2>=0){this.y-=height/20;}
    }
    if(keyIsDown(DOWN_ARROW)){
			if(this.y+this.lado<=height){
				this.y+=height/20;}
		}		
	}
}
