$(document).ready(function () {
  // TODO 7: Create a Dot Helper Function
  function makeDot(top, left, elementID) {
    $("<div>")
      .css("height", 15)
      .css("width", 15)
      .css("background-color", "black")
      .css("position", "absolute")
      .css("top", top)
      .css("left", left)
      .appendTo(elementID);
  }

  // TODO 4 & 6: Create rollDie function
  function rollDie(dieID) {
    // TODO 9: Clear the die before each roll
    $(dieID).empty();

    // TODO 6: Generate a random number
    var randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);

    // TODO 8 & 10: Add dots based on the random number
    if (randomNum === 1) {
      makeDot(50, 50, dieID); // middle middle
    } else if (randomNum === 2) {
      makeDot(25, 25, dieID); // top left
      makeDot(75, 75, dieID); // bottom right
    } else if (randomNum === 3) {
      makeDot(25, 25, dieID); // top left
      makeDot(75, 75, dieID); // bottom right
      makeDot(50, 50, dieID); // middle middle
    } else if (randomNum === 4) {
      makeDot(75, 75, dieID); // bottom right
      makeDot(25, 25, dieID); // top left
      makeDot(25, 75, dieID); // bottom left
      makeDot(75, 25, dieID); // top right
    } else if (randomNum === 5) {
      makeDot(50, 50, dieID); // middle middle
      makeDot(75, 75, dieID); // bottom right
      makeDot(25, 25, dieID); // top left
      makeDot(25, 75, dieID); // bottom left
      makeDot(75, 25, dieID); // top right
    } else if (randomNum === 6) {
      // TODO 10: Add the final dice face (six dots)
      makeDot(25, 25, dieID); // top left
      makeDot(25, 50, dieID); // top middle
      makeDot(25, 75, dieID); // top right
      makeDot(75, 25, dieID); // bottom left
      makeDot(75, 50, dieID); // bottom middle
      makeDot(75, 75, dieID); // bottom right
    }
  }

  // TODO 4: Create handleClick function
  function handleClick() {
    rollDie("#die");
  }

  // TODO 5: Register a click event with jQuery
  $("#die").on("click", handleClick);
});
