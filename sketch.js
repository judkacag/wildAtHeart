// General variables

let myFont;
let table;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJCkOYiAgU1rmbqfJCSVhakdL9-QkESvykjpe0JwK7lmtnlXNzp-Pg0ZsLleoFwvafvl2j6EvctzaI/pub?output=csv";

// Static text variables

let calloutOne = "Well, you ain’t let me down yet, Sail’. That’s more than I can say for the rest of the world.";
let calloutTwo = "Sailor singing Love me tender to Lula on top of the car";
let calloutThree = "The film starts with Sailor getting into jail for killing Bobby Ray Lemon";
let calloutFour = "- Sail’, how come you didn’t sing me Love me tender? You told me that was your favorite love song.";
let calloutFive = "- I told you I’d only sing Love me tender to my wife.";
let calloutSix = "- I’d go to the far end of the world for you baby.";
let calloutSeven = "- Rockin’ good news.";
let chartTitle = "Who's smoking?";

// Circle size variables

let innerCircleWidth = 511;
let middleCircleWidth = 600;
let outerCircleWidth = 693;
let titleCircleWidth = 770;
let titleInnerCircleWidth = 455;

// Bar chart variables

let mapWidthMin = 15;
let mapWidthMax = 150;
let xPosBarChart = 117;
let yPosBarChart = 635;

// How to read variables

let howToRead = "How to read?";
let howToReadX = 1160;
let howToReadY = 714;
let howToReadInc = 19;
let howToReadSize = 9;
let xLabel = 1292;
let yLabel = 760;
let sizeLabel = 30;
let sizeLabelIncrement = 13;

// Title variables

let title = 'Wild at heart';
let titleArray = [];
let title2 = 'weird on top';
let titleArray2 = [];
let innerCircleText = 'a film by David Lynch';
let innerCircleTextArray = [];
let theta = 195;


// ----------------------------------------------------------

// Data for cigarette count

let cigaretteName = ['Sailor', 'Lula', 'Johnnie', 'Others', 'Perdita', 'Bobby', 'Juana', 'Marcello'];
let cigaretteCount = [20, 17, 8, 3, 3, 2, 1, 1];
let label = ['Sailor singing', 'Sailor smoking', 'Lula smoking', 'Others smoking', 'Sex', 'Violance']

// ----------------------------------------------------------

function preload() {
  myFont = loadFont('DancingScript-VariableFont_wght.ttf');
  table = loadTable(url, 'csv', 'header');
}

// ----------------------------------------------------------

function setup() {
  createCanvas(1440, 900);
  colorMode(HSB, 360, 100, 100, 100)
  background(240, 1.18, 99.6);
  
  fill(260, 0, 20, 100);
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
  
  // ----------------------------------------------------------
  
  // How to read section
  
  // How to read title
  
  noStroke();
  fill(260, 0, 20, 100);
  textSize(32);
  text(chartTitle, 117, 565, 200, 37)
  text(howToRead, 1173, 647, 180, 37)
  
  // How to read bubbles
  
  // Sailor sing bubble
  push();
  noStroke();
  fill(1)
  fill(247.8, 32.11, 74.51, 20);
  ellipse(howToReadX, howToReadY, howToReadSize, howToReadSize)
  
  // Sailor smoke bubble
  linearGradientFill(
    howToReadX - howToReadSize / 2, (howToReadY + howToReadInc) - howToReadSize / 2,
    howToReadX + howToReadSize / 2, (howToReadY + howToReadInc) + howToReadSize / 2,
    color(25.6, 15.45, 96.47, 80),
    color(247.8, 32.11, 74.51, 80),
    );
  ellipse(howToReadX,  howToReadY + howToReadInc, howToReadSize, howToReadSize)
  
  // Lula smoke bubble
  linearGradientFill(
    howToReadX - howToReadSize / 4, (howToReadY + (howToReadInc * 2)) - howToReadSize / 4,
    howToReadX + howToReadSize / 4, (howToReadY + (howToReadInc * 2)) + howToReadSize / 4,
    color(247.8, 32.11, 74.51, 60),
    color(15.62, 39.34, 95.69, 60),
    );
  ellipse(howToReadX, howToReadY + (howToReadInc * 2), howToReadSize, howToReadSize)
  
  // Others smoke bubble
  noFill();
  stroke(1);
  strokeWeight(howToReadSize / 2 - (howToReadSize / 2 * 0.65));
  linearGradientStroke(
    howToReadX - howToReadSize / 2, (howToReadY + (howToReadInc * 3)) - howToReadSize / 2,
    howToReadX + howToReadSize / 2, (howToReadY + (howToReadInc * 3)) + howToReadSize / 2,
    color(25.6, 15.45, 96.47, 80),
    color(247.8, 32.11, 74.51, 80),
    );
  ellipse(howToReadX, howToReadY + (howToReadInc * 3), howToReadSize, howToReadSize)
  
  // Sex scenes bubble
  noStroke();
  fill(1);
  fill(248, 0, 50, 100);
  ellipse(howToReadX, howToReadY + (howToReadInc * 4), howToReadSize, howToReadSize);
  
  // Violent scenes bubble
  rectMode(CENTER);
  rect(howToReadX, howToReadY + (howToReadInc * 5), howToReadSize, howToReadSize);
  
  // How to read label - texts
  
  for (let i = 0; i < label.length; i++) {
    fill(260, 0, 20, 100);
    textSize(12);
    text(label[i], howToReadX + 55, howToReadY + 2, 80, 20);
    howToReadY += howToReadInc;
  }
  
  textAlign(CENTER);
  text('Duration', xLabel, yLabel + 45, 100, 30);
  textSize(8);
  text('(Singing and smoking)', xLabel, yLabel + 60, 120, 30);
  textSize(12);
  // textAlign(RIGHT);
  // text('Data & design: Judit Bekker', xLabel - sizeLabel, yLabel + 90, 150, 30);
  
  // How to read circle size demonstrator
  
  for (let i = 0; i < 4; i++) {
    noFill();
    stroke(260, 0, 20, 20);
    circle(xLabel, yLabel+ 3, sizeLabel);
    sizeLabel += sizeLabelIncrement;
    yLabel -= sizeLabelIncrement / 2;
  }
  pop();
  
  // Breaking down the circular title strings to an array
  
  titleArray = title.split("");
  titleArray2 = title2.split("");
  innerCircleTextArray = innerCircleText.split("");
}

// ----------------------------------------------------------

function draw() {
  noLoop(); // temporary
  
  // Wild at heart title
  
  push();
  noStroke();
  fill(260, 0, 20, 100);
  textSize(48);
  textAlign(CENTER);
  translate(width / 2, height / 2);
  for (let i = 0; i < titleArray.length; i++) {
    // This if is needed for kerning the letters individually when needed
    // The rotate function controls how close the letters are to each other
    if (titleArray[i] === 'i') {
      rotate(QUARTER_PI/12);
    } else if (titleArray[i] === 'l') {
      rotate(QUARTER_PI/20);
    } else if (titleArray[i] === 'r') {
      rotate(QUARTER_PI/15) 
    } else {
      rotate(QUARTER_PI/16);
    }
    push();
    // This section controls the rotation of the individual letters
    translate(titleCircleWidth/ 2 * cos(theta)*-1, titleCircleWidth/2 * sin(theta)*-1);
    rotate(radians(-74));
    text(titleArray[i], 0, 0);
    pop();
  }
  pop();
  
  // a film by David Lynch callout
  
  push();
  noStroke();
  fill(260, 0, 20, 100);
  textSize(18);
  textAlign(CENTER);
  translate(width / 2, height / 2);
  for (let i = 0; i < innerCircleTextArray.length; i++) {
    // The rotate function controls how close the letters are to each other
    rotate(QUARTER_PI/24);
    push();
    // This section controls the rotation of the individual letters
    translate(titleInnerCircleWidth/ 2 * cos(theta)*-1, titleInnerCircleWidth/2 * sin(theta)*-1);
    rotate(radians(-74));
    text(innerCircleTextArray[i], 0, 0);
    pop();
  }
  pop();
  
  // Weird on top title
  
  push();
  noStroke();
  fill(260, 0, 20, 100);
  textSize(48);
  textAlign(CENTER);
  translate(width / 2, height / 2);
  for (let i = 0; i < titleArray2.length; i++) {
    // This if is needed for kerning the letters individually when needed
    // The rotate function controls how close the letters are to each other
    if (titleArray2[i] === 'i') {
      rotate(QUARTER_PI/19);
    } else if (titleArray2[i] === 'e') {
      rotate(QUARTER_PI/14)
    } else if (titleArray2[i] === 'r') {
      rotate(QUARTER_PI/21)
    } else {
      rotate(QUARTER_PI/16);
    }
    push();
    // This section controls the rotation of the individual letters
    translate(titleCircleWidth/ 2 * cos(theta), titleCircleWidth/2 * sin(theta));
    rotate(radians(-256));
    text(titleArray2[i], 0, 0);
    pop();
  }
  pop();
  
  // Bar chart
  
  push();
  for (let i = 0; i < cigaretteName.length; i++) {
    rectMode(CORNER);
    noStroke();
    fill(260, 0, 20, 100);
    textSize(18);
    text(cigaretteName[i], xPosBarChart, yPosBarChart, 50, 20);
    textSize(12);
    // Mapping the original cigarette count to a bigger range to make the bars wider
    text(cigaretteCount[i], xPosBarChart + 70 + map(cigaretteCount[i], 1, 20, 10, 140) + 10, yPosBarChart + 4, 50, 20 )
    fill(247.8, 32.11, 74.51, 60);
    rect(xPosBarChart + 70, yPosBarChart + 8, map(cigaretteCount[i], 1, 20, 10, 140), 8, 50, 50);
    yPosBarChart = yPosBarChart += 25;
  }
  pop();
  
  // Radial chart
  
  // Violent scenes
  
  push(); 
  for (let r = 0; r < table.getRowCount(); r++) {
    const activity = table.getString(r, 2);
    const angle = table.getNum(r, 12);
    let x = outerCircleWidth / 2 * cos(radians(angle)) + width/2;
    let y = outerCircleWidth / 2 * sin(radians(angle)) + height/2;
    noStroke();
    fill(248, 0, 50, 100);
    rectMode(CENTER);
    if (activity === 'brutality') {
      rect(x, y, 8, 8)
    }
  }
  
  // Sex scenes
  
  for (let r = 0; r < table.getRowCount(); r++) {
    const activity = table.getString(r, 2);
    const angle = table.getNum(r, 12);
    let x = innerCircleWidth / 2 * cos(radians(angle)) + width/2;
    let y = innerCircleWidth / 2 * sin(radians(angle)) + height/2;
    noStroke();
    fill(248, 0, 50, 100);
    if (activity === 'sex') {
      ellipse(x, y, 10, 10);
    }
  }
  
  // Singing scenes - false different axis!
  
  for (let r = 0; r < table.getRowCount(); r++) {
    const activity = table.getString(r, 2);
    const angle = table.getNum(r, 12);
    const duration = map(table.getNum(r, 6), 1, 294, mapWidthMin * 2, mapWidthMax * 2);
    let x = middleCircleWidth / 2 * cos(radians(angle)) + width/2;
    let y = middleCircleWidth / 2 * sin(radians(angle)) + height/2;
    // This if creates the underlay circle
    if (activity === 'sing') {
      for (let r = 0; r < table.getRowCount(); r++) {
        noStroke();
        fill(1);
        fill(249.2, 5.4, 94.9);
        ellipse(x, y, duration, duration);
      }
    }
    // This if creates the lines on top of the circle above
    if (activity === 'sing') {
      for (let i = 0; i <= 360; i += 3) {
        noFill();
        stroke(1);
        strokeWeight(2)
        linearGradientStroke(
          x - (duration / 4), y - (duration / 4),
          x + (duration), y + (duration),
          color(25.6, 15.45, 96.47, 85),
          color(247.8, 32.11, 74.51, 85)
        )
        let rad = radians(i);
        xLineS = x + (duration / 2 * cos(rad - radians(90)));
        yLineS = y + (duration / 2 * sin(rad - radians(90)));
        xLineE = x - (duration / 2 * cos(rad));
        yLineE = y - (duration / 2 * sin(rad)*-1);
        line(xLineS, yLineS, xLineE, yLineE);
      }
    }
  }
  
  // Sailor smoking
  
  for (let r = 0; r < table.getRowCount(); r++) {
    const name = table.getString(r, 1);
    const activity = table.getString(r, 2);
    const angle = table.getNum(r, 12);
    const duration = map(table.getNum(r, 6), 1, 294, mapWidthMin, mapWidthMax);
    let x = middleCircleWidth / 2 * cos(radians(angle)) + width/2;
    let y = middleCircleWidth / 2 * sin(radians(angle)) + height/2;
    noStroke();
    fill(1)
    linearGradientFill(
      x - (duration / 2), y - (duration / 2),
      x + (duration / 2), y + (duration / 2),
      color(25.6, 15.45, 96.47, 80),
      color(247.8, 32.11, 74.51, 80),
    );
    if (activity === 'cigarette' && name === 'Sailor') {
      ellipse(x, y, duration, duration);
    }
  }
  
  // Others smoking
  
  for (let r = 0; r < table.getRowCount(); r++) {
    const name = table.getString(r, 1);
    const activity = table.getString(r, 2);
    const angle = table.getNum(r, 12);
    const duration = map(table.getNum(r, 6), 1, 294, mapWidthMin, mapWidthMax);
    let x = middleCircleWidth / 2 * cos(radians(angle)) + width/2;
    let y = middleCircleWidth / 2 * sin(radians(angle)) + height/2;
    noFill();
    strokeWeight(duration / 2 - (duration / 2 * 0.65));
    stroke(1);
    linearGradientStroke(
      x - (duration / 2), y - (duration / 2),
      x + (duration / 2), y + (duration / 2),
      color(25.6, 15.45, 96.47, 80),
      color(247.8, 32.11, 74.51, 80),
    );
    if (activity === 'cigarette' && name !== 'Sailor' && name !== 'Lula') {
      ellipse(x, y, duration, duration);
    }
  }
  
  // Lula smoking
  
  for (let r = 0; r < table.getRowCount(); r++) {
    const name = table.getString(r, 1);
    const activity = table.getString(r, 2);
    const angle = table.getNum(r, 12);
    const duration = map(table.getNum(r, 6), 1, 294, mapWidthMin, mapWidthMax);
    let x = middleCircleWidth / 2 * cos(radians(angle)) + width/2;
    let y = middleCircleWidth / 2 * sin(radians(angle)) + height/2;
    noStroke();
    fill(1);
    linearGradientFill(
      x - (duration / 4), y - (duration / 4),
      x + (duration / 4), y + (duration / 4),
      color(247.8, 32.11, 74.51, 60),
      color(15.62, 39.34, 95.69, 60),
    );
    if (activity === 'cigarette' && name === 'Lula') {
      ellipse(x, y, duration, duration);
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

// Pressing the enter will download as png

function keyPressed() {
  if (keyCode === 13) {
    saveCanvas('wildAtHeart', 'png');
  }
}
