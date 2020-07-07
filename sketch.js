const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground,slingshot,polygon,polygon_image,platform1,platform2;

//var box1,box2,box3,box4,box5,box6,box7;

function preload() {
  polygon_image = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();

    world = engine.world;

    ground = new Ground(600,380,1210,50);

    platform1 = new Ground(450,280,250,20);

    platform2 = new Ground(800,170,250,20);

    var l = 360;

    box1 = new Box(l,240,30,40);
    box2 = new Box(l + 30,240,30,40);
    box3 = new Box(l + 60,240,30,40);
    box4 = new Box(l + 90,240,30,40);
    box5 = new Box(l + 120,240,30,40);
    box6 = new Box(l + 150,240,30,40);
    box7 = new Box(l + 180,240,30,40);

    box8 = new Box(l + 30,200,30,40);
    box9 = new Box(l + 60,200,30,40);
    box10 = new Box(l + 90,200,30,40);
    box11 = new Box(l + 120,200,30,40);
    box12 = new Box(l + 150,200,30,40);

    box13 = new Box(l + 60,160,30,40);
    box14 = new Box(l + 90,160,30,40);
    box15 = new Box(l + 120,160,30,40);

    box16 = new Box(l + 90,120,30,40);

    var p = 710;

    box17 = new Box(p + 30,150,30,40);
    box18 = new Box(p + 60,150,30,40);
    box19 = new Box(p + 90,150,30,40);
    box20 = new Box(p + 120,150,30,40);
    box21 = new Box(p + 150,150,30,40);
 
    box22 = new Box(p + 60,110,30,40);
    box23 = new Box(p + 90,110,30,40);
    box24 = new Box(p + 120,110,30,40);
 
    box25 = new Box(p + 90,70,30,40);

    var options = {
      'restitution':0.0,
      'friction':1.0,
      'density':1.0
  }

    polygon = Bodies.circle(50,200,20,options);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:110, y:210});
}

function draw(){

  background("#3A2D2D");

  Engine.update(engine);

  imageMode(CENTER);
  image(polygon_image,polygon.position.x,polygon.position.y,40,40);

  slingshot.display();
  ground.display();
  platform1.display();
  platform2.display();
  box1.display("#87CEEA");
  box2.display("#87CEEA");
  box3.display("#87CEEA");
  box4.display("#87CEEA");
  box5.display("#87CEEA");
  box6.display("#87CEEA");
  box7.display("#87CEEA");

  box8.display("#FFC0CB");
  box9.display("#FFC0CB");
  box10.display("#FFC0CB");
  box11.display("#FFC0CB");
  box12.display("#FFC0CB");

  box13.display("#3FE0D0");
  box14.display("#3FE0D0");
  box15.display("#3FE0D0");

  box16.display("#808080");

  box17.display("#FFC0CB");
  box18.display("#FFC0CB");
  box19.display("#FFC0CB");
  box20.display("#FFC0CB");
  box21.display("#FFC0CB");

  box22.display("#3FE0D0");
  box23.display("#3FE0D0");
  box24.display("#3FE0D0");

  box25.display("#808080");

  //console.log(mouseX,mouseY);
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode == 32){
      Matter.Body.setPosition(this.polygon, {x:110, y:210})
      slingshot.attach(this.polygon);
  }
}