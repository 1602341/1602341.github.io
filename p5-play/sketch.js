// p5play


let sA, sB, j;
function setup() {
	createCanvas(windowWidth, windowHeight);
	world.gravity.y = 10;

	sA = new Sprite(250, 0, 10, 50, 'k');
	sB = new Sprite(100, 20, 20);

	j = new DistanceJoint(sA, sB);
	j.offsetA.y = 25;

	j.springiness = 0.6; // try changing this!
}

function draw() {
	clear();
	sA.moveTowards(mouse);
}