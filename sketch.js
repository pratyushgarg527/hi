const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;

function preload() {

}

function setup() {
    var canvas = createCanvas(600, 800);
    engine = Engine.create();
    world = engine.world;


}

function draw() {

    background("black")
    Engine.update(engine);

}

