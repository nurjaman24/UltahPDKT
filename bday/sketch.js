/*
 * b'day card
 * created: 21 December 2018
 * d-day: 24 December 🎉
 * 
 * https://hilmizul.github.io/bday
 */

var mobils = [];
var balloons = [];
var total = 100;
var font;
var foto, bgStatic;
var PD = "Perisai Diri";
var Cab = "Cabang Kota Tasikmalaya";
var by = "by Nurjaman";
var sfxPop;

function preload() {
	foto = loadImage("assets/img/pd.png");
	bgStatic = loadImage("assets/img/bg1.jpg");
	font = loadFont("assets/font/font2.ttf");
	sfxPop = loadSound("assets/sfx/pop.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (let i = 0; i < total; i++) {
		balloons.push(new Ballon());
	}
}

function draw() {
	background(114, 51, 153);
	
	image(bgStatic, 0, 0, width, height);

	push();
	var imgX = width / 2;
	var imgY = height / 2;
	// foto
	translate(imgX + (-mouseX + width / 2) / 30, imgY + (-mouseY + height / 2) / 30);
	imageMode(CENTER);
	image(foto, 0, 0, 200, 200);
	// frame
	// noFill();
	// stroke(250, 150);
	// strokeWeight(10);
	// ellipse(0, 0, 210, 210);
	pop();

	// name
	push();
	fill(255);
	stroke(45, 28, 82);
	strokeWeight(7);
	textFont(font);
	textSize(50);
	textAlign(CENTER);
	// by
	text(by, imgX + (mouseX - width / 2) / 30, imgY + 300 + (mouseY - height / 2) / 30);
	// name
	text(Cab, imgX + (mouseX - width / 2) / 30, imgY + 200 + (mouseY - height / 2) / 30);
	// teks hbd
	text(PD, imgX + (mouseX - width / 2) / 30, imgY - 150 + (mouseY - height / 2) / 30);
	pop();

	// balloons
	for (let i = 0; i < balloons.length; i++) {
		balloons[i].show();
		balloons[i].up();
		balloons[i].checkEdge();
		if (balloons[i].mouseHover()) {
			sfxPop.play();
			balloons.splice(i, 1);
		}
	}

	if (balloons.length < 3) {
		for (let i = 0; i < total; i++) {
			balloons.push(new Ballon());
		}
	}
}