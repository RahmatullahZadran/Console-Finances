var finances = [  //finance data
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

console.log( "```text");  // log for text 
console.log("Financial Analysis"); // log for text
console.log("----------------"); //log for text

 //total months calculation
const totalMonths = finances.length; // total months in array 

console.log("Total Months: " + totalMonths); // total months in array + log

//total $ targetting second array
let total = 0; // total variable
for (let i = 0; i < finances.length; i++) { // for loop for total array 
  total += finances[i][1]; // total += finances[i][1] adding the second array to a total
}
console.log("Total: $" + total); // total + log 

// You will need to track what the total change in Profit/Losses are from month to month and then find the average
// Calculate the total change in Profit/Losses from month to month
let totalChange = 0; // total change variable
for (let i = 1; i < finances.length; i++) { // for loop for total change
  totalChange += finances[i][1] - finances[i-1][1]; //toal change, starting from one, add the second array to the first
}

// Find the average change in Profit/Losses
const averageChange = totalChange / (finances.length - 1); //average change

//to two decimal places
const twoDecimalPlaces = averageChange.toFixed(2); // to two decimal
console.log("Average Change: " + twoDecimalPlaces); // average change + log

// The greatest increase in Profit/Losses over the entire period
let greatestIncrease = finances[1][1] - finances[0][1]; // greatest increase 
let monthWithGreatestInecrease = '';  // month with greatest increase
for (let i = 1; i < finances.length - 1; i++) { // for loop
  const increase = finances[i + 1][1] - finances[i][1]; // increase 
  if (increase > greatestIncrease) { // if increase is greater than greatest increase
    greatestIncrease = increase; // greatest increase = increase
    monthWithGreatestInecrease = finances[i + 1][0]; // month with greatest increase = increase
  }
}

console.log("Greatest Increase in Profits/Losses: " +monthWithGreatestInecrease + " " + greatestIncrease); // greatest increase + log

//The greatest decrease in Profit/Losses over the entire period both month and amount
let greatestDecrease = finances[1][1] - finances[0][1]; // greatest decrease
let monthWithGreatestDecrease = ''; // month with greatest decrease

for (let i = 1; i < finances.length - 1; i++) { // for loop
  const decrease = finances[i + 1][1] - finances[i][1]; // decrease
  if (decrease < greatestDecrease) { // if decrease is less than greatest decrease
    greatestDecrease = decrease; // greatest decrease = decrease
    monthWithGreatestDecrease = finances[i + 1][0]; // month with greatest decrease = decrease
  }
}
console.log("Greatest Decrease in Profits/Losses: " + monthWithGreatestDecrease +  " " + greatestDecrease); // greatest decrease + log

console.log("```"); // log for text


//Creating a game 
let board;
let boardWidth = 360;
let boardHeight = 576;
let context;

//player
let playerWidth = 46;
let playerHeight = 46;
let playerX = boardWidth / 2 - playerWidth / 2;
let playerY = boardHeight*7/8 - playerHeight;
let playerRightImage;
let playerLeftImage;

//physics
let velocityX = 0;

//platform
let platformArray = [];
let platformWidth = 60;
let platformHeight = 18;
let platformimg;
//object
let player = {
  Img : null,
  x : playerX,
  y : playerY,
  width : playerWidth,
  height : playerHeight,
}


window.onload = function() {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");

  // //draw player
  // context.fillStyle = "green";
  // context.fillRect(player.x, player.y, player.width, player.height);

  //adding pic
  playerRightImage = new Image();
  playerRightImage.src = "images/right4.png";
  player.img = playerRightImage;
  playerRightImage.onload = function() {
    context.drawImage(player.img, player.x, player.y, player.width, player.height);
    
  }
  playerLeftImage = new Image();
  playerLeftImage.src = "images/left2.png";


platformimg = new Image();
platformimg.src = "images/platform.jpg";

placePlatforms();

  requestAnimationFrame(update);
  document.addEventListener("keydown", movePlayer);
}
function update() {
  requestAnimationFrame(update);
  context.clearRect(0, 0, board.width, board.height);

  player.x += velocityX;
  if (player.x > boardWidth) {
    player.x = 0;
    
  }
  else if (player.x + player.width < 0) {
    player.x = boardWidth; 
  }

  context.drawImage(player.img, player.x, player.y, player.width, player.height);
  
  //draw platforms
  for (let i = 0; i < platformArray.length; i++) {
    let platform = platformArray[i];
    context.drawImage(platform.img, platform.x, platform.y, platform.width, platform.height);
  }
}

function movePlayer(e) {

  if (e.code == "ArrowRight" || e.code == "KeyD") {
    velocityX = 4;
    player.img = playerRightImage;
  }
  else if (e.code == "ArrowLeft" || e.code == "KeyA") {
    velocityX = -4;
    player.img = playerLeftImage;
  }
}

function placePlatforms() {
    platformArray = [];

    //create platforms
    let platform = {
      img : platformimg,
      x : boardWidth / 2,
      y : boardHeight - 50,
      width : platformWidth,
      height : platformHeight
    }
    platformArray.push(platform);
  }
