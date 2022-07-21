let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;




const toJS = function (){
  return new Promise ((resolve,reject)=>{
    let morseObjJs = JSON.parse(morse);
    if (Object.keys(morseObjJs).length !== 0){
      resolve(morseObjJs)
    } else {
      reject("Morse Obj empty")
    }
  })
}


const toMorse = function (morseJS){
  return new Promise ((resolve,reject)=>{
    const answerUser = prompt("What is the word ?");
    const answerArr = answerUser.toLowerCase().split("");
    const keyArr = Object.keys(morseJS);
    const result = answerArr.every((elem) => keyArr.includes(elem))
  
    if(!result){
      reject("Letter Not included")
    } else {
      const arrMorse = answerArr.map((elem) => morseJS[elem])
      resolve(arrMorse)
    }
  })
}


toJS()
.then(res => toMorse(res)) //res is the morseObj
.then(morsearr => console.log(morsearr.join("\r\n"))) //morsearr is the arr of morse letters
.catch(error => console.log(error))

// converted the sentence into a array
// object.keys to create an array that contains only the keys of the object
// every method - condition include