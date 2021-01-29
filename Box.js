class Box{
    constructor(x,y,width,height){
       
        var options={
          restitution:0.4,
          friction:0.0,
          
        }
        this.visibility=255;
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        
       
        World.add(world,this.body)
    }
     
    display(){
      if(this.body.speed<3){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("brown")
        rect(0,0,this.width,this.height)
        pop();
      }
      else{
         World.remove(world,this.body)
         push();
         this.visibility=this.visibility-5
         tint(255,this.visibility);
         pop();
      }

      
      }

      score(){
        if (this.visibility < 0 && this.visibility > -105){
          score++;
        }
      }
    
  
    }



