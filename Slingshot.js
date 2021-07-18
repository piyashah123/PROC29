class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling); 
        this.sling1=loadImage('sprites/sling1.png')
        this.sling2=loadImage('sprites/sling2.png')
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<200){
                push()
                strokeWeight(7);
            stroke(200,0,0)
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-10);
            line(pointA.x-20, pointA.y, pointB.x-5, pointB.y-10);
       pop ()
            }
            else{
               push()
                strokeWeight(4);
            stroke(200,0,0)
            line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-10);
            line(pointA.x+20, pointA.y, pointB.x-5, pointB.y-10);
            pop ()
            }
            
        }
        image(this.sling1,200,20)
        image(this.sling2,170,20)
    }
    
}