class Hero {
    constructor (x,y,width,height){
  
        var options ={

            density : 1.0,
            frictionAir : 1.25,
            
        }
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.image=loadImage("image/Superhero-02.png")
        this.body=Bodies.rectangle(x,y,width,height,options);

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop()
    }
  }