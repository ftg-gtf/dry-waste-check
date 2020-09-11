class Waste{
    constructor(x, y, width, height){
    var options ={
        restitution: 0.1,
        isStatic: false,
        friction: 0.5,
        density: 1.2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
   display(){
        var where = this.body.position;
        var angle = this.body.angle;
        push();
        translate(where.x, where.y);
        rotate(angle);
        strokeWeight(5);
        stroke("red");
        rectMode(CENTER);
        fill("blue");
        rect(0, 0, this.width, this.height);
        pop();
    }

    fly(){
        if(keyCode === UP_ARROW){
            Matter.Body.applyForce(this.body, this.body.position, {x:85,y:-85});
        }
    }
};
