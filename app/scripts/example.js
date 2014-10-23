var Bad = function(options){
  options= options || {};
  this.name= options.name;
  this.health=100;
  this.attack= function(attackee){
    attackee.health=attackee.health- 10;
  };
  this.special= function(attackee){
    attackee.health=attackee.health-20;
  };
};

var Good = function(){
  var special_points, attack_points;
  options= options || {};
  this.name= options.name;
  this.type=options.type;
  this.health=100;
  switch(this.type){
    case '1'
      attack_points= 10;
      special_points=20;
      break;
    case '2':
      attack_points= 20;
      special_points=40;
      break;
    case '3':
      attack_points= 5;
      special_points=30;
      break;
  };
  this.attack= function(attackee){
    attackee.health= attackee.health- attack_points;
    };
  this.special= function(attackee){
    attackee.health= attackee.health - special_points;
  };
};

// var player= new Good({name: 'mario', type: 'warrior'});
// var monster= new Bad({name: 'Bowser'});

$('.welcome button').on('click', function(event){
  event.preventDefault();

  var char_type=$(this).attr('name'),
      char_name= $(this).text();

  console.log(button_id);

  //create instance of new good guy
  var player = new Good({
    name: char_name,
    type: char_type,
  });

  //create instance of new bad guy
  var monster= new Bad({
    name: 'Bowser';
  });

  $('.welcome').fadeOut(500, function(){
    ggName.text
    $('.fight').fadeIn;
  });

});



//
// $(#fight).on('click', function (event){
// event.preventDefault();
//
// //good guy will attack the bad guy
// //body guy's health will decrease
// player.attack(monster);
// $('.bghealth').text(monster.health);
// //bad guy will retaliate
// //good guy's health will decrease
// monster.attack(player);
// $('.gghealth').tect(player.health);
// //checkfor winner after each attack
// if (player.health<=0){
// //player is dead
// }
// else if (monster.health<=0){
// //monster is dead
// }
//
//
//
//
// });
//
//
// player.attack(monster);
// if (monster.health > 0){
// 	monster.attack(player);
// 	//if the monster is still alive, attack the player
// }
// else{
// 	//monster is dead
// }
//
// if (player.health <=0 ){
// 	//player's dead
//
// }
//
//
//
//
// adding health and name to the browser
//
//  1. find where you are going to put the name (class name of div where its going)
//  2. prepend the name,
//  3. then within that (the div where name is going) find
//  4. the span/div where your health is going to go, and add the text
//  	from player.health
