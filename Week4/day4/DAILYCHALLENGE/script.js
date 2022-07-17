
// SYNTAX
class Video {
  constructor(title, uploader, time){
    //create attribute
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch(){
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title} !`)
  }
}

let video1 = new Video("Harry Potter", "Errol", 1000)
// console.log(video1)
video1.watch()
let video2 = new Video("trry Pttter", "tErrol", 10600)
video2.watch()




// 
// solution

// class Video {
//   constructor(title, uploader, seconds){
//     this.title = title,
//     this.uploader = uploader,
//     this.seconds = seconds
//   }

//   watch(duration){
//     duration <= this.seconds ? console.log(`You watched ${duration} seconds of ${this.title}!`) : console.log (`The video is shorter than that, please put in another duration!`)
//   }
// }

// let myVid = new Video("My first video!", "cNolan", 57);
// myVid.watch(66);
// let myVid2 = new Video("Tenet", "cNolan", 2332243532433);

// let videoCollection = [];
// [
//   ["LET'S PLAY MINECRAFT EPISODE 13214 SUPER COOL HOUSE BUILT!!!!", "genericYoutuber1", 423235],
//   ["20 more supposed lifehacks with catchy music", "genericYoutuber2", 22435],
//   ["geneticYoutuber3 reacts to 20 more supposed lifehacks with catchy music", "genericYoutuber1", 11313423235]
// ].forEach(val => videoCollection.push(new Video(...val)))
// console.log(videoCollection)