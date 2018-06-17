function randomColor() {
	r = randomNumber();
	g = randomNumber();
	b = randomNumber();
	color = "#" + r + g + b;
	return color;
}

function randomNumber() {
	var number = Math.random().toFixed(2) * 500;
	if(number <= 255)
		return number.toString(16);
	else randomNumber();
}