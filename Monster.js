class Monster {
    constructor (x,y,width,height){
  
        var options ={

            density : 3,
            isStatic:false,
            frictionAir : 0.1,
            restitution:1

            
        }
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.image=loadImage("image/Monster-01.png")
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