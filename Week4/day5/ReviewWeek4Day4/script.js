// Review on classes and objects


// let strangerThings = {
// 	title : "Stranger Things",
// 	language : "English",
// 	subtitles : ["French","Hebrew","Chinese"],
// 	quality : [780, 1000]
// 	start : false;

// 	play : function () {
// 		this.start = true
// 	}

// 	stop : function () {
// 		this.start = false
// 	}

// 	changeQuality : function(userNeed){
// 		console.log("You chose the quality ...")
// 	}
// }


// let loveManhattan = {
// 	title : "loveManhattan",
// 	language : "English",
// 	subtitles : ["French","Chinese"],
// 	quality : [780]
// 	start : false;

// 	play : function () {
// 		this.start = true
// 	}

// 	stop : function () {
// 		this.start = false
// 	}

// 	changeQuality : function(userNeed){
// 		console.log("You chose the quality ...")
// 	}
// }


class Movie {
	constructor (titleMovie,movieLanguage) {
		this.title = titleMovie;
		this.language = movieLanguage;
		this.subtitles = ["French","Chinese"];
		this.quality = [780];
		this.start = false;
	}

	play () {
		this.start = true;
		console.log(`The movie ${this.title} just started`);
		//DOM - <video> start
	}

	stop () {
		this.start = false
		console.log("The movie just started")
	}

	addSubtitle (newSubtitle){
		this.subtitles.push(newSubtitle)
	}


	addQuality (newQuality){
		this.quality.length < 2 ? this.quality.push(newQuality): null
	}
}

const loveManhattan = new Movie("Love In Manhattan", "English")
const loveNewYork = new Movie("Love In NewYork", "German")


class MovieNetflix extends Movie {
	constructor(titleMovieNetflix, languageMovieNetflix){
		super(titleMovieNetflix, languageMovieNetflix)
		this.producer = "Netflix"
	}
} 

const kungFu = new MovieNetflix("Kung fu Yeah", "Chinese");

// Review object destructuring
let family = {
	lastname : "Smith",
	members: 3,
	adresses : {
		first : "Ben Gurion 1",
		second : "Bezalel 4",
		cities : ["Tel Aviv", "Ramat Gan", "Paris"]
	}
}

// object destructuring
// array destructuring
function getDetails(){
	// const ln = family["lastname"]
	// const ramatgan = family["adresses"]["second"]

	const {
		lastname,
		adresses : {second : secondAdress, cities : [,,thirdcity]},
	} = family

	console.log(`${lastname} lives in ${secondAdress} in ${thirdcity}`)
}

getDetails()