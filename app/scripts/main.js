//constructors
var Player = function (options) {
  this.name = options.name;
  this.health = 100;
  this.attack = function(warrior){
    warrior.health = warrior.health - (_.random(0,20));
    };
  };

var Enemy = function (options) {
  this.name = options.name;
  this.health = 100;
  this.attack = function(player){
    player.health = player.health - (_.random(0,20));
  };
};

// instances
var player;
var enemy= new Enemy({name: 'Bowser', health: 100});



$('.start').on('click', function(){
  event.preventDefault();

  $('.choose').show();
  $('.welcome').hide();
});



$('.choose button').on('click', function(){
  event.preventDefault();

  $('.choose').hide();
  $('.fight').show();

  var player_name= $(this).text();
      player = new Player({
      name: player_name,


  });



  $('.playername').html(player_name);

});
