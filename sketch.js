const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var polygon;
var stand;
var slingShot;
var polygon_img;
var score;

function preload() {
polygon_img = loadImage("polygon.png");

}

function setup() {
    createCanvas(1200, 400);
    // The next three lines of code below are needed for a game consisting of physics, RIGHT?
    engine = Engine.create(); //creating an engine
    world = engine.world; //creating an engine in the world
    Engine.run(engine); //running an engine
    ground = new Ground(600, displayHeight, 1200, 20);
    stand = new Stand(390,300,250,10);
    score = 0;

    //creating objects in
 
  //level one
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  //no need to declare
  //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  //top
  block16 = new Box(390,155,30,40);

  //polygon holder with slings

  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon); // to add a polygon into the world

  slingShot = new Slingshot(this.polygon,{x:100,y:200}); // this.polygon refers to the polygon created above right. Y

}

function draw() {

  background("cyan");

    text(mouseX + ',' + mouseY, 10, 15); // mouseX and Y refers to the x and y coordinates of the mouse right. Y
    textSize(20);
    fill("lightyellow"); // What does fill mean?
    text("Drag the polygon to destroy the blocks",300,30);
    textSize(10);
    text("Press Space to get a second Chance to Play!!",650 ,350);
    ground.display();
    stand.display();
    strokeWeight(2);
    stroke(15);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

    //What do these next 2 lines of coding do?
    
    imageMode(CENTER) // To see the center coordinates of the image
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);  

    slingShot.display();

    text("SCORE : "+score,750,40);

}

  function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY}); // whatever body u are dragging
  }
  
  function mouseReleased(){
    slingShot.fly(); // Why is it slingShot.fly? Shouldnt it be polygon.fly?.
  }

  // What is this next function for?. To reattach the polygon to the slingshot.

  function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
  }