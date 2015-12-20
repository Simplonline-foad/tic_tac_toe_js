
// raccourcis pour selectionner un élément par son ID //
var getById = function(id){
  return document.getElementById(id);
}

// variables d'accès //
var $intel_board = getById("intel_board");
var $player_board = getById("player_board");
var $game_board = getById("game_board");
var $player1_victory = getById("player1_victory");
var $player2_victory = getById("player2_victory");

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
var player1_victory = 0;
var player2_victory = 0;
var current_player;
var winner = 0;


//fonctions //
function announce_player(){
  if(count % 2 == 0){
    current_player = 2;
    $player_board.innerHTML = "<h3> Tour du Joueur 2 ! </h3>";
  }else{
    current_player = 1;
    $player_board.innerHTML = "<h2> Tour du Joueur 1 ! </h2>";
  }
}

function announce_winner(){
  if(winner == 0){
    $intel_board.innerHTML= "<h5>Egalité, pas de gagnant ! </h5>";
  }else if(winner == 1){
    player1_victory++;
    $player1_victory.innerHTML = player1_victory;
    $intel_board.innerHTML= "<h5>Le joueur " + winner + " gagne la partie ! </h5>";
  }else if(winner == 2){
    player2_victory++;
    $player2_victory.innerHTML = player2_victory;
    $intel_board.innerHTML= "<h5>Le joueur " + winner + " gagne la partie ! </h5>";
  }
}

function announce_partie_ended(){
  $intel_board.innerHTML = "<h4> La partie est finie !! </h4>";
  count = 1;
}


function check_rows(){
  if ($col_1.hasChildNodes() && $col_2.hasChildNodes() && $col_3.hasChildNodes()){
    if ($col_1.firstChild.className == $col_2.firstChild.className && $col_2.firstChild.className == $col_3.firstChild.className){
      winner = current_player;
      $col_1.style.backgroundColor = "lightgreen";
      $col_2.style.backgroundColor = "lightgreen";
      $col_3.style.backgroundColor = "lightgreen";
      announce_winner();
      end();
    }
  }
  if ($col_4.hasChildNodes() && $col_5.hasChildNodes() && $col_6.hasChildNodes()){
    if ($col_4.firstChild.className == $col_5.firstChild.className && $col_5.firstChild.className == $col_6.firstChild.className){
      winner = current_player;
      $col_4.style.backgroundColor = "lightgreen";
      $col_5.style.backgroundColor = "lightgreen";
      $col_6.style.backgroundColor = "lightgreen";
      announce_winner();
      end();
    }
  }
  if ($col_7.hasChildNodes() && $col_8.hasChildNodes() && $col_9.hasChildNodes()){
    if ($col_7.firstChild.className == $col_8.firstChild.className && $col_8.firstChild.className == $col_9.firstChild.className){
      winner = current_player;
      $col_7.style.backgroundColor = "lightgreen";
      $col_8.style.backgroundColor = "lightgreen";
      $col_9.style.backgroundColor = "lightgreen";
      announce_winner();
      end();
    }
  }
}

function check_cols(){
  if ($col_1.hasChildNodes() && $col_4.hasChildNodes() && $col_7.hasChildNodes()){
    if ($col_1.firstChild.className == $col_4.firstChild.className && $col_4.firstChild.className == $col_7.firstChild.className){
      winner = current_player;
      $col_1.style.backgroundColor = "lightgreen";
      $col_4.style.backgroundColor = "lightgreen";
      $col_7.style.backgroundColor = "lightgreen";
      announce_winner();
      end();
    }
  }
  if ($col_2.hasChildNodes() && $col_5.hasChildNodes() && $col_8.hasChildNodes()){
    if ($col_2.firstChild.className == $col_5.firstChild.className && $col_5.firstChild.className == $col_8.firstChild.className){
      winner = current_player;
      $col_2.style.backgroundColor = "lightgreen";
      $col_5.style.backgroundColor = "lightgreen";
      $col_8.style.backgroundColor = "lightgreen";
      announce_winner();
      end();
    }
  }
  if ($col_3.hasChildNodes() && $col_6.hasChildNodes() && $col_9.hasChildNodes()){
    if ($col_3.firstChild.className == $col_6.firstChild.className && $col_6.firstChild.className == $col_9.firstChild.className){
      winner = current_player;
      $col_3.style.backgroundColor = "lightgreen";
      $col_6.style.backgroundColor = "lightgreen";
      $col_9.style.backgroundColor = "lightgreen";
      announce_winner();
      end();
    }
  }
}

function check_diags(){
  if ($col_1.hasChildNodes() && $col_5.hasChildNodes() && $col_9.hasChildNodes()){
    if ($col_1.firstChild.className == $col_5.firstChild.className && $col_5.firstChild.className == $col_9.firstChild.className){
      winner = current_player;
      $col_1.style.backgroundColor = "lightgreen";
      $col_5.style.backgroundColor = "lightgreen";
      $col_9.style.backgroundColor = "lightgreen";
      announce_winner();
      end();
    }
  }
  if ($col_3.hasChildNodes() && $col_5.hasChildNodes() && $col_7.hasChildNodes()){
    if ($col_3.firstChild.className == $col_5.firstChild.className && $col_5.firstChild.className == $col_7.firstChild.className){
      winner = current_player;
      $col_3.style.backgroundColor = "lightgreen";
      $col_5.style.backgroundColor = "lightgreen";
      $col_7.style.backgroundColor = "lightgreen";
      announce_winner();
      end();
    }
  }
}

function end(){
  game_started = false;
  game_ended = true;
  current_player = null;
  count = 1;
  announce_partie_ended()
  console.log('la partie est finie!');
}

function reset_grid(){
  console.log("strarting reset");
  for(i=0; i < col_array.length; i++){
    if(col_array[i].firstChild != null){
      col_array[i].removeChild(col_array[i].firstChild);
      col_array[i].style.backgroundColor = "lightgrey";
    }

  }

}

function add_a_cross(e){

  if(e.target.hasChildNodes() == false && (e.target.className !== "fa fa-times" && e.target.className !== "fa fa-circle-o")){
    e.target.appendChild($cross.cloneNode());
    check_rows();
    check_cols();
    check_diags();
    count++;
  }else{
    $intel_board.innerHTML = "<h4> Cette case a déjà été jouée </h4>"
  }
}

function add_a_cicle(e){
  if(e.target.hasChildNodes() == false && (e.target.className != "fa fa-times" && e.target.className != "fa fa-circle-o")){
    e.target.appendChild($circle.cloneNode());
    check_rows();
    check_cols();
    check_diags();
    count++;
  }else {
    $intel_board.innerHTML = "<h4> Cette case a déjà été jouée </h4>"
  }
}



function play(e){
  if (game_started){

    if(count > col_array.length - 1){
        add_a_cross(e);
        end();
        announce_winner();
      } else {
        // here you play //
        if(current_player == 1){
          add_a_cross(e);
        } else {
          add_a_cicle(e);
        }
        if(game_ended == false){
          announce_player();
        }else{
          player_board.innerHTML = "";
        }
      }
    }else{
      $intel_board.innerHTML = "<h4> Aucune partie en cours, cliquez sur 'commencer' ! </h4>"
      console.log('Aucune partie en cours.');
    }


}

// events //

function add_grid_events(){
  for (i = 0; i < col_array.length; i++){
    col_array[i].addEventListener('click', play, false);
  }
}

function start() {
  reset_grid();
  add_grid_events();
  count = 1;
  winner = 0;
  game_started = true;
  game_ended = false;
  console.log('la partie est lancé !')
  current_player = 1;
  announce_player();
}

$btn.addEventListener('click', start, false);
