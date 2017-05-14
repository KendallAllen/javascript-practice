var choices = ["square", "triangle"]
var shape = prompt("Select a shape: "); 

// The selections can only be square or triangle
while (!(choices.includes(shape))) {
    shape = prompt("Choose either square or triangle");
};

// Calculate area with appropriate formula
if (shape == "square") {
    var length = prompt("Enter length of sides: ");
    var area = (length * length)
    console.log(area + " is the area of the square.");
} else {
    var base = prompt("Enter length of base: ");
    var height = prompt("Enter the height of the triangle: ");
    var area = (base * height) / 2
    console.log(area + " is the area of the triangle.");
};
