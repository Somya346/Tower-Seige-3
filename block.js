class block{
    constructor(x,y,width,height){
        var options={
        isStatic:false,
        restitution:0.8,
        friction:1.0,

        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.visibility = 225;
        World.add(world,this.body);

       }
       
       display(){
           
               var angle = this.body.angle;
               var pos = this.body.position;
               if(this.body.speed<3){
                push();
                translate(pos.x,pos.y);
                rotate(angle);
                rectMode(CENTER);
                strokeWeight(4);
                fill("violet");
                rect(0,0,this.width,this.height);
            pop();
       }
       else
       {
           World.remove(world,this.body);
           push();
           this.visibility=this.visibility -5;
           pop();
       }   
      
       }

    score(){
        if(this.visibility<0 && this.visibility>-105){
        score = score + 1;
        }
    }

       }
    
