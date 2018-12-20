
var resetButton = document.getElementById("reset");

var playerTurn = document.getElementsByClassName("playerTurn");

var turn = 0;


// // Add Piece
// find the squares
var squares = document.getElementsByTagName("td");
// add listener
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function(event){
    if (this.innerHTML == "") {
      if (turn == 0) {
        this.classList.add("X");
        this.innerHTML = "X";
        playerTurn[0].innerHTML = "It is O's turn";
        turn++;
      } else {
        this.classList.add("O");
        this.innerHTML = "O";
        playerTurn[0].innerHTML = "It is X's turn";
        turn--;
      }
    }
    // console.log(this);
    // clicked_square();
  });
}

resetButton.addEventListener("click", function(event){
  for (var i = 0; i < squares.length; i++) {
    playerTurn[0].innerHTML = "It is X's turn"; 
    turn = 0;
    squares[i].classList.remove("X", "O");
    squares[i].innerHTML = "";
  }
});
// function clicked_square(){
//   // console.log(this.innerHTML);
// }

// add class to clicked square

// what happens if a piece is placed there already?

// player turns
  // place correct piece
  // switch turns
  // update text

// Win/lose
  // check for win
  // Update text
  // clear board
  // unbinding click events on win















// hewooo
