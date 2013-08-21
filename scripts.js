
var randomStringsPrefix = ["lazy", "stupid", "insecure","idiotic","slimy","slutty", "smelly", "pompous","dicknosed","racist", "butterface", "creepy", "flatulent",]
var randomStringsNoun = ["douche", "arse", "turd","rectum","cock","butt", "shit","crotch","bitch", "turd", "prick","slut", "taint", "fuck", "twat", "boner", "shart",]
var randomStringsSuffix = ["pilot", "canoe", "captain","pirate","hammer","knob", "box", "jockey","nazi","waffle", "goblin", "blossum","biscuit", "clown", "socket", "monster", "hound", "dragon", "balloon", ]

function displaydate(){
	document.getElementById("body").innerHTML=Date();
}

function randomcolour(){
	var text = document.getElementById("test");
	text.style.color='#' + Math.random().toString(16).substring(4);
}

function randomcolourbackground(){
	document.body.style.backgroundColor ='#' + Math.random().toString(16).substring(4);
}

function upscaletext(){
	var text = document.getElementById("test");
	text.style.fontSize='20em';
}

function insultme(){
	var name = document.getElementById("input").value;
	displayinsult(name);
	randomcolour();
	randomcolourbackground();
	
}

function displayinsult(name){
	var area = document.getElementById("test").innerHTML="You're a "+ getrandomprefix() +" "+ getrandomnoun()+ " "+ getrandomsuffix()+" " +name+ "!";
}

function getrandomprefix(){
	randomIndex = Math.ceil((Math.random()*randomStringsPrefix.length-1));
    newText = randomStringsPrefix[randomIndex];
    return newText;
}

function getrandomnoun(){
	randomIndex = Math.ceil((Math.random()*randomStringsNoun.length-1));
    newText = randomStringsNoun[randomIndex];
    return newText;
}

function getrandomsuffix(){
	randomIndex = Math.ceil((Math.random()*randomStringsSuffix.length-1));
    newText = randomStringsSuffix[randomIndex];
    return newText;
}
