const Engine = Matter.Engine;
    const World= Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;

    var engine, world;
    var division=[];
    var plinko=[];
    var particles=[];
function setup() {
  engine = Engine.create();
    world = engine.world;
  createCanvas(800,800);
  for(var k=0;k<=width;k=k+80){
    division.push(new Division(k,height-150,10,300));
  }
  for(var j=75;j<=width;j=j+50){
    plinko.push(new Plinko(j,75,10));
  }
  for(var j=50;j<=width-10;j=j+50){
    plinko.push(new Plinko(j,175,10));
  }
  for(var j=75;j<=width;j=j+50){
    plinko.push(new Plinko(j,275,10));
  }
  for(var j=50;j<=width-10;j=j+50){
    plinko.push(new Plinko(j,375,10));
  }
  Engine.run(engine);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  
  
  for(var k=0;k<division.length;k++){
    division[k].display();
  }
  for(var k=0;k<plinko.length;k++){
    plinko[k].display();
  }
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }
  for(var k=0;k<particles.length;k++){
 particles[k].display();
  }
  //drawSprites();
}