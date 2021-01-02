//Create variables here
var dog, dogIMG, happyDog, database, foodStock;
var foods = 20;
function preload()
{
  //load images here
  dogIMG = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,300,20,20)
  dog.addImage("dogImg.png",dogIMG)
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",function(readStock){
  textSize(50)
  })
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    foods = foods-1;
    writeStock(foods);
    dog.changeImage(happyDog) 
   }
  drawSprites();
  textSize(50)
  text(foods,300,400);
  textSize(20)
  text("press UP_ARROW to feed Tito!",220,300);
  //add styles here

}

function readStock(data){
  food=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}



