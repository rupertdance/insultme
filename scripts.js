
var randomStringsPrefix = ["a lazy", "a poopy", "an unsightly", "an uptight", "a screeching", "a cumbersome", "a dysfunctional", "a bewildered", "a stupid", "a timid", "a cheeky", "a skeletal", "a belligerent", "a manky", "a fartfaced", "a moronic", "an incompetent", "a slimy", "a smelly", "a pompous","a dicknosed", "a butterfaced", "a creepy", "a flatulent", "a dorky", ]
var randomStringsNoun = ["poo", "douche", "arse", "fecal", "turd", "rectum","cock","butt", "shit","crotch", "turd", "prick", "taint", "twat", "boner", "shart", "dong", "slobber",]
var randomStringsSuffix = ["pilot", "canoe", "captain", "sherriff", "pirate","hammer","knob", "box", "jockey","nazi","waffle", "goblin", "blossum","biscuit", "canoe", "clown", "socket", "monster", "hound", "dragon", "balloon", ]

var randomretorts = ["That's almost a compliment! Try Again!", "Really? Is that the best you can do?", "Come on mate, have a real go!", "Abysmal, insult me again!", "PATHETIC, INSULT ME AGAIN!", "Seriously, is that it? Go again!", "Terrible, insult me again.", "Meh, try again.",] 

function randomcolour(){
	var text = document.getElementById("test");
	var red = Math.floor(Math.random() * (256 - 0 + 1)) + 0;
	var blue = Math.floor(Math.random() * (256 - 0 + 1)) + 0;
	var green= Math.floor(Math.random() * (256 - 0 + 1)) + 0;
	text.style.color='rgb('+red+','+green+','+blue+')';
}

function randomcolourbackground(){

	var red = Math.floor(Math.random() * (256 - 0 + 1)) + 0;
	var blue = Math.floor(Math.random() * (256 - 0 + 1)) + 0;
	var green = Math.floor(Math.random() * (256 - 0 + 1)) + 0;
	document.body.style.backgroundColor ='rgb('+red+','+green+','+blue+')';

}

function entercheck(event){
        if (event.which == 13 || event.keyCode == 13) {
            insultme();
           return false;
        }
       return true;
 }


function insultme(){
	var name = document.getElementById("input").value;
	displayinsult(name);
	randomcolour();
	randomcolourbackground();
	updatetext();
}


function updatetext(){
	document.getElementById("insulttext").innerHTML=getretort();    //"PATHETIC, INSULT ME AGAIN!";
}

function getretort(){
	//randomly select from var of retort strings
	randomIndex = Math.ceil((Math.random()*randomretorts.length-1));
    retort = randomretorts[randomIndex];
	return retort;
}

function displayinsult(name){
	document.getElementById("test").innerHTML="You're "+ getrandomprefix() +" "+ getrandomnoun()+ "-"+ getrandomsuffix()+", " +name+ "!";
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
