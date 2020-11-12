class Boy{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.boy1= loadImage("sprites/boy.png");
        this.pointB = pointB
        this.boy = Constraint.create(options);
        World.add(world, this.boy);
    }

    fly(){
        this.boy.bodyA = null;
    }

    display(){
        image(this.boy1,200,20);
        
        if(this.boy.bodyA){
            var pointA = this.boy.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("brown");
            if(pointA.x<220){
                strokeWeight(7);
                
                line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
                
                
            }
            
           
            pop();
        }
    }
    
}