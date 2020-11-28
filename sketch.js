var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var block1, block2, block3;
var world, engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	block1 = Bodies.rectangle(290, 610, 20, 100, { isStatic: true, restitution: 0.3 });
	World.add(world, block1)
	
	block2 = Bodies.rectangle(400, 650, 200, 20, { isStatic: true});
	World.add(world, block2)

	block3 = Bodies.rectangle(500, 610, 20, 100, { isStatic: true, restitution: 0.3 });
	World.add(world, block3)

//	groundSprite = createSprite(width / 2, height - 35, width, 10);
//	groundSprite.shapeColor = color(255)

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0.3, isStatic: true });
	World.add(world, packageBody);

	// ground = Bodies.rectangle(width / 2, height-35, 850, 10, { isStatic: true });
	ground = Bodies.rectangle(width / 2, 690, 850,10, { isStatic: true });
	World.add(world, ground);
	
		Engine.run(engine);

}

function draw() {
	background(0);
	Engine.update(engine)
	 fill ("red")
	rectMode(CENTER);
	rect(block1.position.x, block1.position.y, 20, 100);
	rectMode(CENTER);
	rect(block2.position.x, block2.position.y, 200, 20);
	rectMode(CENTER);
	rect(block3.position.x, block3.position.y, 20, 100);
	fill (255)
	rectMode(CENTER);
	rect(ground.position.x, ground.position.y,850 , 20);

	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y

	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
		

	}
}