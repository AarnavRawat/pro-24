class Paper {
    constructor(x, y, radius) {
        var options = {
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        };
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(userWorld, this.body);

    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("white");
        fill("white");
        ellipseMode(CENTER)
        ellipse(0, 0,2 * this.radius,2*this.radius);
        pop();
    }
}