const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var engine , world ;
var ground , divider1;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function preload(){
  
}


function setup() {
 var canvas =  createCanvas(480,800);
 // createSprite(400, 200, 50, 50);


 engine = Engine.create();
 world = engine.world;
  
 ground = new Ground(240,780,480,20);

 divider1 = new Division(475,550,5,450);
 divider2 = new Division(375,550,5,450);
 divider3 = new Division(275,550,5,450);
 divider4 = new Division(175,550,5,450);
 divider5 = new Division(75,550,5,450);
 divider6 = new Division(5,550,5,450);

 for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }


 //particles = new Particle(0,0,10);
 //divider7 = new Division(375,550,5,450);
}

function draw() {
  Engine.update(engine);

  background(0,0,0);  
  //drawSprites();
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  ground.display();
  divider1.display();
  divider2.display();
  divider3.display();
  divider4.display();
  divider5.display();
  divider6.display();
 // plinko.display();
  //particles.display();

  if(frameCount%60===0){
    
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  
  //divider7.display();
}