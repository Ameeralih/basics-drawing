// User inputs number
// Output emojis the same number of times as user's number input
var emojiAdd = function (input) {
  // initialse count at 0
  var count = 0;
  // Initialise emojiOutput as empty string
  var emojiOutput = "";

  while (count < input) {
    emojiOutput = emojiOutput + "👀";

    // increment count
    count += 1;
  }
  return emojiOutput;
};

var dimensionsToSquare = function (dimensions) {
  // Initialise squareOutput as empty string
  var squareOutput = "";
  // Initialise countRow as 0
  var countRow = 0;

  while (countRow < dimensions) {
    // For each row loop, implement a column loop that adds onto the output by iterating through each column
    // Initialise countColumn as 0
    countColumn = 0;
    while (countColumn < dimensions) {
      // For each column element, add a sun
      squareOutput = squareOutput + "🌞";
      countColumn += 1;
    }
    // To end each row loop, add a <br> tag to the output to create a new line for the next loop to start iterating on the next row
    squareOutput = squareOutput + "<br>";
    countRow += 1;
  }
  return squareOutput;
};

// First row = 1  character to add
// Second row = 2 characters to add
// ...
// xth row = x characters to add

var dimensionsToTriangle = function (dimensions) {
  // Initialise triangleOutput as empty string
  var triangleOutput = "";
  // Initialise countRow as 0
  var countRow = 0;

  while (countRow < dimensions) {
    // initialise countColumn as 0
    countColumn = 0;
    while (countColumn < countRow) {
      // The column loop only runs if countColumn < countRow. This limits the number of charcater outputs every row to the row number
      triangleOutput = triangleOutput + "📐";
      // Increment countColumn
      countColumn += 1;
    }
    // To end each row loop, add a <br> tag to the output to create a new line for the next loop to start iterating on the next row
    triangleOutput = triangleOutput + "<br>";
    countRow += 1;
  }
  return triangleOutput;
};

dimensionsToOutlinedSquare = function (dimensions) {
  // Initialise squareOutput as empty string
  var outlinedSquareOutput = "";
  // Initialise countRow as 0
  var countRow = 0;

  while (countRow < dimensions) {
    // For each row loop, implement a column loop that adds onto the output by iterating through each column
    // Initialise countColumn as 0
    countColumn = 0;
    while (countColumn < dimensions) {
      // For each column element, if the loop is iterating in either the first row, first column, last row, or last column add a sun
      if (
        countColumn == 0 ||
        countColumn == dimensions - 1 ||
        countRow == 0 ||
        countRow == dimensions - 1
      ) {
        outlinedSquareOutput = outlinedSquareOutput + "🌞";
      } else {
        outlinedSquareOutput = outlinedSquareOutput + "🌚";
      }

      // For each column element, if the loop is iterating not in the first row, first column, last row, or last column add a moon
      countColumn += 1;
    }
    // To end each row loop, add a <br> tag to the output to create a new line for the next loop to start iterating on the next row
    outlinedSquareOutput = outlinedSquareOutput + "<br>";
    countRow += 1;
  }
  return outlinedSquareOutput;
};

var main = function (input) {
  inputToNumber = Number(input);

  console.log(inputToNumber);
  if (Number.isNaN(inputToNumber)) {
    return "Please input a valid number";
  }
  // myOutputValue = emojiAdd(input);

  // myOutputValue = dimensionsToSquare(input);

  // myOutputValue = dimensionsToTriangle(input);

  myOutputValue = dimensionsToOutlinedSquare(input);

  return myOutputValue;
};
