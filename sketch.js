//launch server to load sound and images
var mySound;
var prince;
var princeStill;
var foomin;
var ball;
var foominX = 650;
var foominY = 350;
var fDir = 1;

function preload()
{
  mySound = loadSound("02-katamari-on-the-rock-main-theme.mp3");
  prince = loadAnimation("assets/prince_001.png", "assets/prince_002.png");
  foomin = loadAnimation("assets/foomin_001.png", "assets/foomin_012.png");
  princeStill = loadImage("assets/princeStill.png");
  ball = loadImage("assets/ball.png");
}

function setup()
{
  createCanvas(640, 480);
  background(181, 222, 190);
  mySound.setVolume(0.01);
  // mySound.play();
  mySound.loop();
}

function draw()
{
  background(181, 222, 190);
  var timer = millis();
  println(timer);
  //3000
  //16000 for next
  //27000 for chu chu chu chu
  if(timer < 16000)
  {
    image(princeStill, width/2, height/2);
  }
  else
  {
    animation(prince, width/2, height/2);
  }

  while(timer > 16000)
  {
    image(ball, random, random);
  }

  //direction of foomin translating
  if(foominX > 600)
  {
    fDir = 0; //go left
  }
  else if (foominX < 50)
  {
    fDir = 1; //go right
  }

  if(timer > 27000)
  {
    animation(foomin, foominX, foominY);
    
    if (fDir == 0)
    {
      foominX++;
    }
    if (fDir == 1)
    {
      foominX--;
    }
  }

}
