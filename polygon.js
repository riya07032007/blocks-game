class Polygon{
    constructor(x,y,r) {
    
      var options={ 
        restitution:0.8,
        friction:1,
        density:1.2

        
      }    

     
      this.image=loadImage("polygon.png")
      this.polygon = Bodies.circle(50,200,20,options);
      World.add(world,this.polygon);
      
    }
    display(){
      var paperPos =this.polygon.position;

      push()
      translate(paperPos.x,paperPos.y)
      rectMode(CENTER)
      strokeWeight(3)
      imageMode(CENTER);
      image(this.image,0,0,40,40);
      pop()
    }
  };