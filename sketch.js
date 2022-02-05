// Variables
var myFont;
let table;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJCkOYiAgU1rmbqfJCSVhakdL9-QkESvykjpe0JwK7lmtnlXNzp-Pg0ZsLleoFwvafvl2j6EvctzaI/pub?output=csv";
let innerCircleWidth = 511;
let middleCircleWidth = 600;
let outerCircleWidth = 693;

let calloutOne = "Well, you ain’t let me down yet, Sail’. That’s more than I can say for the rest of the world.";
let calloutTwo = "Sailor singing Love me tender to Lula on top of the car";
let calloutThree = "The film starts with Sailor getting into jail for killing Bobby Ray Lemon";
let calloutFour = "- Sail’, how come you didn’t sing me Love me tender? You told me that was your favorite love song.";
let calloutFive = "- I told you I’d only sing Love me tender to my wife.";
let calloutSix = "- I’d go to the far end of the world for you baby.";
let calloutSeven = "- Rockin’ good news.";
let chartTitle = "Who's smoking?";
let howToRead = "How to read?";

// ----------------------------------------------------------

function preload() {
  myFont = loadFont('DancingScript-VariableFont_wght.ttf');
  table = loadTable(url, 'csv', 'header');
}

// ----------------------------------------------------------

function setup() {
  createCanvas(1440, 900);
  colorMode(HSB, 360, 100, 100, 100)
  background(247.8, 32.11, 74.51, 3);
  
  fill(248, 0, 50, 100);
  textFont(myFont);
  
  // Callout texts
  textSize(18);
  text(calloutOne, 117, 430.5, 184, 93)
  text(calloutTwo, 177, 70, 201, 45)
  text(calloutThree, 1007, 83.5, 254, 76)
  text(calloutFour, 1140, 228, 185, 164)
  text(calloutFive, 1140, 325, 185, 100)
  text(calloutSix, 1140, 414, 190, 100)
  text(calloutSeven, 1140, 465, 185, 100)
  
  // Title
  textSize(32);
  text(chartTitle, 117, 565, 200, 37)
  text(howToRead, 1173, 647, 180, 37)
  
  // Static circles and lines
  stroke(247.8, 32.11, 74.51, 20);
  strokeWeight(1)
  noFill();
  circle(width/2, height/2, outerCircleWidth);
  circle(width/2, height/2, innerCircleWidth);
  line(412, 92.5, 545, 92.5)
  line(840.5, 108.5, 972.5, 108.5)
  line(1078, 279.5, 1116.5, 279.5)
  line(117, 607.5, 303.5, 607.5)
  line(1173.5, 686.5, 1324.5, 686.5)
  
  stroke(15.62, 39.34, 95.69, 20);
  strokeWeight(45);
  circle(width/2, height/2, middleCircleWidth);
}

// ----------------------------------------------------------

function draw() {
  noLoop(); // this is just for the time being before I learn how to rotate the shapes around their own center
  
  push(); 
  // Violent scenes
  for (let r = 0; r < table.getRowCount(); r++) {
    const activity = table.getString(r, 2);
    const angle = table.getNum(r, 12);
    let x = outerCircleWidth / 2 * Math.cos(radians(angle)) + width/2;
    let y = outerCircleWidth / 2 * Math.sin(radians(angle)) + height/2;
    noStroke();
    fill(248, 0, 20, 80);
    rectMode(CENTER);
    if (activity === 'brutality') {
      rect(x, y, 8, 8)
    }
  }
  
  // Sex scenes
  for (let r = 0; r < table.getRowCount(); r++) {
    const activity = table.getString(r, 2);
    const angle = table.getNum(r, 12);
    let x = innerCircleWidth / 2 * Math.cos(radians(angle)) + width/2;
    let y = innerCircleWidth / 2 * Math.sin(radians(angle)) + height/2;
    noStroke();
    fill(248, 0, 20, 80);
    if (activity === 'sex') {
      ellipse(x, y, 10, 10);
    }
  }
  
  // Singing
  for (let r = 0; r < table.getRowCount(); r++) {
    const activity = table.getString(r, 2);
    const angle = table.getNum(r, 12);
    const duration = table.getNum(r, 6);
    let x = middleCircleWidth / 2 * Math.cos(radians(angle)) + width/2;
    let y = middleCircleWidth / 2 * Math.sin(radians(angle)) + height/2;
    noStroke();
    fill('rgba(137, 129, 190, 0.2)');
    if (activity === 'sing') {
      ellipse(x, y, duration, duration);
    }
  }
  
  // Sailor smoking
  for (let r = 0; r < table.getRowCount(); r++) {
    const name = table.getString(r, 1);
    const activity = table.getString(r, 2);
    const angle = table.getNum(r, 12);
    const duration = table.getNum(r, 6);
    let x = middleCircleWidth / 2 * Math.cos(radians(angle)) + width/2;
    let y = middleCircleWidth / 2 * Math.sin(radians(angle)) + height/2;
    noStroke();
    fill(1);
    linearGradientFill(
      x - (duration/ 4), y - (duration/4),
      x + (duration/4), y + (duration/4),
      color(25.6, 15.45, 96.47, 80),
      color(247.8, 32.11, 74.51, 80),
    );
    if (activity === 'cigarette' && name === 'Sailor') {
      ellipse(x, y, duration / 2, duration / 2);
    }
  }
  
  // Others smoking
  for (let r = 0; r < table.getRowCount(); r++) {
    const name = table.getString(r, 1);
    const activity = table.getString(r, 2);
    const angle = table.getNum(r, 12);
    const duration = table.getNum(r, 6);
    let x = middleCircleWidth / 2 * Math.cos(radians(angle)) + width/2;
    let y = middleCircleWidth / 2 * Math.sin(radians(angle)) + height/2;
    noFill();
    strokeWeight(duration / 2 - (duration / 2 * 0.8));
    stroke(1);
    linearGradientStroke(
      x - (duration/ 4), y - (duration/4),
      x + (duration/4), y + (duration/4),
      color(25.6, 15.45, 96.47, 80),
      color(247.8, 32.11, 74.51, 80),
    );
    if (activity === 'cigarette' && name !== 'Sailor' && name !== 'Lula') {
      ellipse(x, y, duration / 2, duration / 2);
    }
  }
  
  // Lula smoking
  for (let r = 0; r < table.getRowCount(); r++) {
    const name = table.getString(r, 1);
    const activity = table.getString(r, 2);
    const angle = table.getNum(r, 12);
    const duration = table.getNum(r, 6);
    let x = middleCircleWidth / 2 * Math.cos(radians(angle)) + width/2;
    let y = middleCircleWidth / 2 * Math.sin(radians(angle)) + height/2;
    noStroke();
    fill(1);
    linearGradientFill(
      x - (duration/ 4), y - (duration/4),
      x + (duration/4), y + (duration/4),
      color(247.8, 32.11, 74.51, 60),
      color(15.62, 39.34, 95.69, 60),
    );
    if (activity === 'cigarette' && name === 'Lula') {
      ellipse(x, y, duration / 2, duration / 2);
    }
  }
  pop();
 
  /* This is a trial point to check placement
  stroke('red');
  let x = 600 / 2 * Math.cos(radians(-90)) + width/2;
  let y = 600 / 2 * Math.sin(radians(-90)) + height/2;
  point(x, y); */
}

// ----------------------------------------------------------

// Function for fill gradient
  function linearGradientFill(sX, sY, eX, eY, colorS, colorE) {
    let gradient = drawingContext.createLinearGradient(
      sX, sY, eX, eY
    );
    gradient.addColorStop(0, colorS);
    gradient.addColorStop(1, colorE);
    drawingContext.fillStyle = gradient;
  }
  
  // Function for stroke gradient
  function linearGradientStroke(sX, sY, eX, eY, colorS, colorE) {
    let gradient = drawingContext.createLinearGradient(
      sX, sY, eX, eY
    );
    gradient.addColorStop(0, colorS);
    gradient.addColorStop(1, colorE);
    drawingContext.strokeStyle = gradient;
  }
