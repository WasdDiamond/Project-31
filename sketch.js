const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World= Matter.World;
var engine,world;
var thunder,thunder1,thunder2,thunder3,thunder4,thunderCreatedFrame,umbrella;
var maxDrops = 100;
var drops = [];
function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
   //create a canvas
   var canvas = createCanvas(400,650); 
   engine = Engine.create();
   world = engine.world;
    

   //add the drops to the array
   if(frameCount % 150 === 0) {
    for(var i = 0; i<maxDrops; i++) {
        drops.push(new Drop(random(0,400),random(0,400)));
   }
}
   umbrella = new Umbrella(200,570);
   
}

function draw(){
    //black background
    background(0);
    //update engine
    Engine.update(engine);

    for(var i = 0; i < maxDrops; i++) {
        print(drops);
        drops[i].display();
        drops[i].update();
    }
    rand = Math.round(random(1,4));
    if(frameCount % 80===0) {
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370), random(10,30),10,10);
        switch(rand) {
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6);
    }

    if(thunderCreatedFrame + 12 === frameCount && thunder) {
        thunder.destroy();
    }
    umbrella.display();
    //drawing the sprites
    drawSprites();
}   

