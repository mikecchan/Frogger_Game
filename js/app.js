// Enemies our player must avoid
let canvas = document.getElementsByTagName('canvas');
//let enemy_count = 5;
let speed_array = [60,145,230];
let player_speed = 50;

let Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = speed_array[Math.floor(Math.random() * Math.floor(3))];
    this.speed = Math.floor(Math.random() * Math.floor(2)) + 1;
    //this.prototype = dimensions;
    this.width = 100;
    this.height = 70;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  //console.log("Enemy function");
  //console.log(Enemy);
  //console.log(Enemy.prototype);
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //NEED TO WRITE CODE HERE IF ENEMY COLLIDES WITH PLAYER.
    //console.log(this);
    this.x += ((200 * dt) * this.speed);

    if (this.x >= canvas[0].width){
      this.x = 0;
      this.y = speed_array[Math.floor(Math.random() * Math.floor(3))];
      this.speed = Math.floor(Math.random() * Math.floor(2)) + 1;
      }

    if (this.x < player.x + player.width &&
       this.x + this.width > player.x &&
       this.y < player.y + player.height &&
       this.height + this.y > player.y) {
         player.x = 200;
         player.y = 375;
      }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    //ctx = canvas.getContext('2d')
    //drawImage takes in image, x coordinate, y coordinate)
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

let Player = function(){

  // 1. Loading the image by setting this.sprite to the appropriate
  // image in the image folder (use the code from the Enemy function
  // as an example on how to do that)

  // 2. Setting the Player initial location

  this.sprite = 'images/char-boy.png';
  this.x = 200;
  this.y = 375;
  //this.prototype = dimensions;
  this.width = 100;
  this.height = 70;
};

Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key_pressed){
  console.log(key_pressed);
  switch(key_pressed) {
    case 'left':
        this.x -= player_speed;
        if (this.x <= 0){
            this.x = 0;
          }
        break;
    case 'up':
        this.y -= player_speed;
        if (this.y <= 40){
          this.x = 200;
          this.y = 375;
          document.getElementsByTagName("h2")[0].style.visibility = "visible";
          //console.log(document.getElementsByTagName("h2")[0].style.visibility);
          window.setTimeout(function(){
            document.getElementsByTagName("h2")[0].style.visibility = "hidden";
          }, 3000);
        }
        break;
    case 'right':
        this.x += player_speed;
        if (this.x >= 400){
            console.log("width");
            this.x = 400;
          }
        break;
    case 'down':
        this.y += player_speed;
        if (this.y >= 450){
            console.log("height");
            this.y = 450;
          }
        break;
      }

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//let allEnemies = new Array(enemy_count);

let allEnemies = [new Enemy(), new Enemy(), new Enemy()];
let player = new Player();

// This listens for key presses and sends the keys to your

document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
