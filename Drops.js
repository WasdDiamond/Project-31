class Drop {
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 8;
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    update() {
        if(this.body.position.y > height) {
            Matter.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)});
        }
    }
    display() {
        push();
        strokeWeight(1);
        stroke("blue");
        fill("blue");
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}