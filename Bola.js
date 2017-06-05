function Bola(x,y){
    
    this.latepositions = [];
    this.t = random(100);
    this.ty = random(100);
    this.x = x;
    this.y = y;

    this.pontoPp1=false;
    this.pontoPp2=false;
    
    this.xdirection = random([1,-1]);
    this.ydirection = random([1,-1]);
    this.xspeed = random(3,4);
    this.yspeed = random(2,4);
    
    this.r = random(10,20);
    
    this.show = function(){
        
        for(var i=0;i<this.latepositions.length;i++){
            noStroke();
            fill(100,100,0,50);
            ellipse(this.latepositions[i].x,this.latepositions[i].y,this.r*2,this.r*2);
        }
        
        strokeWeight(2);
        stroke(0);
        fill(255,255,255);
        ellipse(this.x,this.y,this.r*2,this.r*2);
    }
    
    this.pong = function(){
        if(this.x>=width){
        	this.pontoPp1=true;
			return true;
        }else if(this.x<=0){
        	this.pontoPp2=true;
            return true;
        }
        if(this.y>=height || this.y<=35){
            this.ydirection*=-1;
        }
        
        this.x+=this.xspeed*this.xdirection;
        this.y+=this.yspeed*this.ydirection;
}

    this.colide = function(objeto){
            var xreferencia = this.x;
            var yreferencia = this.y;

            if(this.x>objeto.x){
                xreferencia = objeto.x+objeto.altura;
            }else if(this.x<objeto.x){
                xreferencia = objeto.x;
            }
            
            if(this.y>objeto.y+objeto.lado){
                yreferencia = objeto.y+objeto.lado;
            }else if(this.y<objeto.y){
                yreferencia = objeto.y;
            }else{
                yreferencia = this.y;
            }
            
            if(dist(this.x,this.y,xreferencia,yreferencia)<=this.r){    
                return true;
            }
                return false;
}
    
    this.rebate = function(){
        this.xdirection*=-1;
        if(this.xspeed<=5){
            this.xspeed*=1.1;
            if(this.yspeed<=10){this.yspeed*=1.2;}
        }
    }

    this.update = function(){
        
        this.x+=random(map(noise(this.t) ,0, 1, -10,10));
        if(this.x<-this.r){this.x=width;}
        if(this.x>width+this.r){this.x=0;}
        
        this.y+=random(map(noise(this.ty), 0, 1,-10,10));
        if(this.y<-this.r){this.y=height;}
        if(this.y>height+this.r){this.y=0;}
        
        this.latepositions.push(createVector(this.x,this.y));
        if(this.latepositions.length>=20){
            this.latepositions.splice(0,1);
        }
                
        this.t+=0.001;
        this.ty+=0.001;
    }   
}