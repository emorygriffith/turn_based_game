//constructors
var Player = function (options) {
  options = options || {};
  this.name = options.name;
  this.health = 100;
  this.attack = function(enemy){
    enemy.health = enemy.health - (_.random(0,20));
    };
  };

var Enemy = function (options) {
  options = options || {};
  this.name = options.name;
  this.health = 100;
  this.attack = function(player){
    player.health = player.health - (_.random(0,20));
  };
};

// instances
var player;
var enemy= new Enemy({name: 'Bowser', health: 100});


//'screen 1'
$('.start').on('click', function(){
  event.preventDefault();

  $('.choose').show();
  $('.welcome').hide();
});


//'screen 2'
$('.choose button').on('click', function(){
  event.preventDefault();

  $('.choose').hide();
  $('.fight').show();

  var player_name= $(this).text();

  player = new Player({
      name: player_name,

  });

  $('.playername').prepend(player_name);
  $('.playerhealth').html(player.health);



});

// attack button
$('.attack').on('click', function(){
  player.attack(enemy);
  enemy.attack(player);
  $('.enemyhealth').html(enemy.health);
  $('.playerhealth').html(player.health);

})


$('.enemyhealth').html(enemy.health);
