let turn = document.getElementById("turn");
let cols = document.querySelectorAll(".container div")
let player = 0;
let gameWon = false;

    function getWinner(checkValue) {
      if(checkValue > 0) {
        turn.innerHTML = "X is a winner";
      }else {
        turn.innerHTML = "O is a winner";
      }  
      turn.style.fontSize = "40px";
      gameWon = true;
    }

    function winner() {

      let array = [
  
      ];
      //Assigns numerical values to "X" and "O" to make it easier to calculate the winner of the game.
      for(let i = 1; i <= 9; i++) {
        let boxElement = "box" + i;
        let boxValue = 0;
        if (document.getElementById(boxElement).innerHTML === "X") {
          boxValue = 1;
        }else if(document.getElementById(boxElement).innerHTML === "O") {
          boxValue = -1;
        }
        array.push(boxValue);
      }

      //This loops through each row and column, and checks for a winner by calculating the sum of each row and column.
      for (let a = 0; a < 3; a++) {
        let checkValue = array[3*a] + array[3*a+1] + array[3*a+2];
        if (Math.abs(checkValue) === 3){
            getWinner(checkValue);
            console.log('Winner');
        }
        checkValue = array[a] + array[a+3] + array[a+6];
        if (Math.abs(checkValue) === 3){
            getWinner(checkValue);
            console.log('New Winner');
        }
       checkValue = array[0]+array[4]+array[8];
       if (Math.abs(checkValue) === 3){
        getWinner(checkValue);
     }
       checkValue = array[2]+array[4]+array[6];
       if (Math.abs(checkValue) === 3){
        getWinner(checkValue);
     }
  }
    
    //This loops through the entire array to check for a tie.
    if (gameWon === false) {
      let p = 1;
      for (let i = 0; i < 9; i++) {
        p = p * array[i];
      }
      if (p != 0) {
        turn.innerHTML = "It is a tie";
      }
    }  
  }


    //This for loop and if statements are used to insert the "X" and "O" symbols onto the playing board, as well as tell who's turn it is.
    for (let i = 0; i < cols.length; i++) {
      cols[i].onclick = function () {
          if (player % 2 === 0) {
            this.innerHTML = "X";
            turn.innerHTML = "O Turn Now";
            winner();
            player += 1;

          } else {
            this.innerHTML = "O";
            turn.innerHTML = "X Turn Now";
            winner();
            player += 1;
          }
        }

      };
    

    document.getElementById('restart').addEventListener('click', restartGame);

    function restartGame() {

      for (let i = 0; i < cols.length; i++) {
        cols[i].classList.remove("win");
        cols[i].innerHTML = "";
        turn.innerHTML = "Play again";
        turn.style.fontSize = "35px";

      }
      gameWon = false;
    }