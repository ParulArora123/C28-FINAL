class launcher{
     
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.pointB=pointB
        this.launch=Constraint.create(options)
        World.add(world,this.launch)
    }
attach(body){
    //stone=any other body
    this.launch.bodyA=body
}

fly(){
    this.launch.bodyA=null;
}


    display(){
        if(this.launch.bodyA){
        var pointA=this.launch.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}