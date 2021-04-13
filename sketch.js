const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var upborder,leftborder,downborder,rightborder;

var partition = [];
var partitionHeight = 300;
var particles = [];
var plinko = [];
function setup() {
  createCanvas(800,620);
  engine = Engine.create();
  world=engine.world;
//border
 var upborder= createSprite(400,0,800,10);
 var downborder= createSprite(400,620,800,10);
 var leftborder=createSprite(0,310,10,620);
 var rightborder=createSprite(800,310,10,620);


//ground
ground=new Ground(400,height-4,800,20)
  


//parition
for (var k = 0 ;k <= width; k= k+80){
  partition.push(new Partition(k,height-partitionHeight/2,10,partitionHeight))
}
// //plinko
for (var j = 0 ;j <= width; j= j+50){
  // plinko.push(new Plinko(j,75,10))
  console.log(j)
  a=new Plinko(j,100,10)
}
for(var n =50; n <= width-10; n = n+50){
  b=new Plinko(n,175,10)
}
for(var z = 75 ; z <= width; z = z+50){
  c =new Plinko(z,275,10)
}
for(var q = 50 ; q <= width; q = q+50){
   d =new Plinko(q,375,10)
}

}

function draw() {
  Engine.update(engine);
  background(255,255,255); 
 ground.display();
  drawSprites();
 


  for(var k= 0; k<partition.length; k++)
  {
    partition[k].display();
  }
  


a.display();
b.display();
c.display();
d.display();

if(frameCount % 60===0  ){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10))
  }



  for (var h = 0 ; h<particles.length; h++)
 {
particles[h].display();

 }

}