class Plinko{
    constructor(x, y, radius) {
        var options = {
            isStatic:true,
            'restitution':1.4,
            'friction':0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
       
     //  this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        
        fill(0)
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius)
     
      }
}