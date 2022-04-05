//class SlingShot{
//    constructor(bodyA, pointB){
//        var options = {
//            bodyA: bodyA,
//            pointB: pointB,
//            stiffness: 0.04,
//            length: 10
//        }
//        this.sling1 = loadImage('sprites/sling1.png');
//        this.sling2 = loadImage('sprites/sling2.png');
//        this.sling3 = loadImage('sprites/sling3.png');
//        this.pointB = pointB
//        this.sling = Constraint.create(options);
//        World.add(world, this.sling);
//    }
//    attach(body){
//        this.sling.bodyA = body;
//    }
//    
//    fly(){
//        this.sling.bodyA = null;
//    }
//
//    display(){
//        image(this.sling1,200,20);
//        image(this.sling2,170,20);
//        if(this.sling.bodyA){
//            var pointA = this.sling.bodyA.position;
//            var pointB = this.pointB;
//            push();
//            
//           stroke(48,22,8);
//            if(pointA.x < 220) {
//                strokeWeight(7);
//                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
//                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
//                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
//            }
//            else{
//                strokeWeight(3);
//                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
//                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
//                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
//            }
//           
//            
//            pop();
//        }
//    }
//    
//}

class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            // What do the next 2 lines mean?
            bodyA: bodyA,
            pointB: pointB, // a position in the game
            stiffness: 0.04,
            length: 1
        }
        this.sling = Constraint.create(options); // What does Constraint mean?
        this.pointB=pointB; // What does THIS mean??
        World.add(world, this.sling);

    }
    attach(body){
        this.sling.bodyA = body; // Does this.sling.bodyA refer to the previously mentioned bodyA?. Y
    }
    fly(){
        this.sling.bodyA =null; // When bodyA (polygon) is longer connected to the slingshot, its flying.
        
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4); // What does strokeWeight mean?
        stroke("turquoise"); // What does stroke mean?
        line(pointA.x, pointA.y, pointB.x, pointB.y); // What does line mean?.
        }
        }
    
}