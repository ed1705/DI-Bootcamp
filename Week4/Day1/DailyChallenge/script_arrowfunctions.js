const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 }
];


let userNames = [];
gameInfo.forEach((element)=>userNames.push(element["username"]+"!"));
console.log(userNames)

let fivers = [];
gameInfo.forEach((element)=>element["score"] > 5 ? fivers.push(element["username"]) : {});
console.log(fivers)

let finalScore = 0;
gameInfo.forEach((element)=>finalScore += (element["score"]));
console.log(finalScore)




