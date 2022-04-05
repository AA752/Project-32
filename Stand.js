class Stand{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true // means it stays in a given position forever.
        }
        this.body = Bodies.rectangle(x, y, width, height, options); // What does this do? It cant be a normal rect, u want it to have some special properties
        this.width = width;
        this.height = height;
        World.add(world, this.body); // adding this.body to the World
      }
      display(){
        var angle = this.body.angle; // The property of an object called "angle"
        push();
        translate(this.body.position.x, this.body.position.y); // translate means to move something to a different position right?
        rotate(angle); 
        rectMode(CENTER); // What does this do? To see the center coordinates of the RECTANGLE
        rect(0,0,this.width, this.height);
        pop(); // To make changes to a specific object instead of all of them.
      }
}