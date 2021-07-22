// PART 1: NO ARGUMENTS
/*
function paintWalls() {
    console.log('The wall has been painted pink.');
};

paintWalls();
*/

// PART 2: SINGLE ARGUMENT
/*
function paintWalls(color) {
    console.log('The wall has been painted ' + color + '.');
};

paintWalls('yellow');
paintWalls('blue');
paintWalls(); //without an argument it puts in 'undefined'.
*/

// PART 3: MULTIPLE ARGUMENTS
function paintWalls(color, location) {
    console.log('The ' + location + ' wall has been painted ' + color + '.');
};

paintWalls('red', 'north');
paintWalls('green', 'south');
paintWalls('pink', 'east');

// the order of the arguments when calling the function has to be the same order as in the function definition
// if you want to change the order, you have to change them both
// changing the order doesn't affect the internal use of the arguments