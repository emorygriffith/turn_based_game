var luigi= '<img id="luigi" width= "200px" src="http://th09.deviantart.net/fs71/PRE/i/2012/199/4/2/luigi_by_yoshigo99-d4fuebg.png" />';
var mario= '<img id="mario" width= "200px" src="http://img4.wikia.nocookie.net/__cb20120816162009/mario/images/1/15/MarioNSMB2.png" />';
var peach= '<img id="peach" width= "200px" src="http://www.mariowiki.com/images/thumb/3/38/NSMBWiiPeach.png/240px-NSMBWiiPeach.png" />';

//constructors
var Player = function (options) {
  options = options || {};
  var attack_points;
  this.name = options.name;
  this.health = 100;

  if (name='mario') {
    attack_points=15
  } else if (name='luigi') {
    attack_points=16
  } else if (name='princess peach') {
    attack_points=20
  };

  this.attack = function(enemy){
    enemy.health = enemy.health - attack_points;
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
