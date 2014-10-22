var Player = function (options) {
  this.name = options.name;
  this.health = options.health;
  this.attack = function(warrier){
    warrier.health = options.health -10;
  };

};

var Enemy = function (options) {
  this.name = options.name;
  this.health = options.health;
  this.attack = function(player){
    player.health = options.health -10;
  };
};

var mario = new Player({
  name: 'Mario',
  health: 100,
});

var luigi = new Player({
  name: 'Luigi',
  health: 100
});

var peach = new Player({
  name: 'Peach',
  health: 100
});

var bowser = new Enemy({
  name: 'Bowser',
  health: 100
});

var wario = new Enemy({
  name: 'Wario',
  health: 100
});

var waluigi = new Enemy({
  name: 'Waluigi',
  health: 100
});
