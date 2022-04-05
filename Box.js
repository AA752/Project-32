//class Box extends BaseClass {
//  constructor(x, y, width, height){
//    super(x,y,width,height);
//    this.image = loadImage("sprites/wood1.png");
//  }
//
//};

class Box{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.visibility = 225; //obvious
      this.body = Bodies.rectangle(x, y, width, height, options); // Why are there 5 parameters instead of 4? The options parameter is already defined for some optional things
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
   
    display(){
      console.log(this.body.speed); // to display the speed of an object on the console log right?

      if(this.body.speed <3){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      tint(255,this.visibility); // What is tint??
      pop();
      
    }
  }

  score(){

    if(this.visibility<0 && this.visibility >-105){
      score++;
    }

  }

}