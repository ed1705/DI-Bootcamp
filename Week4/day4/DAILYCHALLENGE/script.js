
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













