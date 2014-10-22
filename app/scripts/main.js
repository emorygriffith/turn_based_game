var Player = function (options) {
  this.name = options.name;
  this.health = options.health || 100;
  };


var Enemy = function (options) {
  this.name = options.name;
  this.health = options.health || 100;
};

//attack prototypes

Player.prototype.attack = function(warrier){
  warrier.health = warrier.health - (_.random(0,20));
};

Enemy.prototype.attack = function(player){
  player.health = player.health - (_.random(0,20));
};

/////

var mario = new Player({
  name: 'Mario',
});

var luigi = new Player({
  name: 'Luigi',

});

var peach = new Player({
  name: 'Peach',

});

var bowser = new Enemy({
  name: 'Bowser',

});

var wario = new Enemy({
  name: 'Wario',

});

var waluigi = new Enemy({
  name: 'Waluigi',

});

$('.mariopic').click(function(){
  $().removeClass('.mariopic').addClass('.fighter');
});
