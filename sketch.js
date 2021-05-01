const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var userEngine;
var userWorld;
var ground;
var paper;
var trash1, trash2, trash3;

function preload() {

}

function setup() {
	createCanvas(800, 700);
	userEngine = Engine.create();
	userWorld = userEngine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 665, 800, 10);
	paper = new Paper(100, 625, 10);
	trash1 = new Trash(650, 655, 100, 10);
	trash2 = new Trash(600, 605, 10, 100);
	trash3 = new Trash(700, 605, 10, 100);

}


function draw() {
	background(0);
	Engine.update(userEngine);

	ground.display();
	paper.display();
	trash1.display();
	trash2.display();
	trash3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x:15 , y: -15})

	}
}

