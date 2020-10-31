const Engine = Matter.Engine;
const World  = Matter.World;
const Body   = Matter.Body;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var d0,d1,d2,d3,d4,d5,d6,d7,d8;

var particles=[];
var plinkos=[];
var divisions=[]


function setup() {
  createCanvas(640,800);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(320,790,640,10)

  for(var i=20; i<=width;i=i+50){
    plinkos.push(new Plinko(i,50,10)) }

  for(var i=15; i<=width-10;i=i+50){
    plinkos.push(new Plinko(i,150,10)) }

  for(var i=10; i<=width-10;i=i+50){
      plinkos.push(new Plinko(i,250,10)) }

  for(var i=5; i<=width-10;i=i+50){
      plinkos.push(new Plinko(i,350,10)) }

  for(var k=0; k<=width;k=k+80){
  divisions.push(new Division(k))
  }
}

function draw() {
  Engine.update(engine);
  background(0);  

  ground.display()

 if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  
  for(var j=0; j<particles.length;j=j+1){
    particles[j].display()}

  for(var k=0; k<divisions.length;k=k+1){
    divisions[k].display()}

    for(var i=0; i<plinkos.length;i=i+1){
    plinkos[i].display()}
}