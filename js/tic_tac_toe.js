
// raccourcis pour selectionner un élément par son ID //
var getById = function(id){
  return document.getElementById(id);
}

// variables d'accès //
var $intel_board = getById("intel_board");
var $game_board = getById("game_board");

var $row_1 = getById("row_1");
var $row_2 = getById("row_2");
var $row_3= getById("row_3");

var $col_1 = getById("col_1");
var $col_2 = getById("col_2");
var $col_3 = getById("col_3");
var $col_4 = getById("col_4");
var $col_5 = getById("col_5");
var $col_6 = getById("col_6");
var $col_7 = getById("col_7");
var $col_8 = getById("col_8");
var $col_9 = getById("col_9");
var col_array = [$col_1, $col_2, $col_3, $col_4, $col_5, $col_6, $col_7, $col_8, $col_9];

var $btn = getById('btn');

// nouveaux nodes //

var $cross = document.createElement('i');
$cross.classList.add('fa');
$cross.classList.add('fa-times');

var $circle = document.createElement('i');
$circle.classList.add('fa');
$circle.classList.add('fa-circle-o');


// variables logiques //
var game_started = false;
var game_ended = true;
var count = 1;
var current_player;



//fonctions //

function add_a_cross(e){
  e.target.appendChild($cross.cloneNode());
}

function add_a_cicle(e){
  e.target.appendChild($circle.cloneNode());
}

function announce_player(){
  if(count % 2 == 0){
    current_player = 2;
    $intel_board.innerHTML = "<h3> Tour du Joueur 2 ! </h3>";
  }else{
    current_player = 1;
    $intel_board.innerHTML = "<h2> Tour du Joueur 1 ! </h2>";
  }
}

function announce_partie_ended(){
  $intel_board.innerHTML = "<h4> La partie est finie !! </h4>";
}

function start() {
  game_started = true;
  game_ended = false;
  console.log('la partie est lancé !')
  current_player = 1;
  announce_player();
}

function play(e){

  if (game_started){
    count++;
    if(count > col_array.length + 1){
      game_started = false;
      game_ended = true;
      announce_partie_ended()
      console.log('la partie est finie!');
      } else {
        // here you play //
        if(current_player == 1){
          console.log(e.target);
          add_a_cross(e);
        } else {
          add_a_cicle(e);
        }
        announce_player();
        console.log(count);
      }
    }else{
      console.log('Aucune partie en cours.');
    }


}

// events //

for (i = 0; i < col_array.length; i++){
  col_array[i].addEventListener('click', play, false);
}

$btn.addEventListener('click', start, false);
