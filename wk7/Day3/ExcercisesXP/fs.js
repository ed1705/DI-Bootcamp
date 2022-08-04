// Excercise1
// let fs = require('fs');
// fs.readFile('SomeText.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data);
// });

// console.log("-----Hello---------", '\n',);

// Excercise 2 

// let fs = require('fs');
// fs.writeFile('test.txt', 'Hello World!', function (err) { 
//     if (err){ 
//         console.log(err);
//     }
//     else{
//         console.log('Write operation complete.');
//     }
// });

// let fs = require('fs');
// let newContent = "bla bla blka blala ss"

// fs.appendFile('test.txt', newContent + '\n', function (err) {
//     if (err) {
//         console.error(err)
//         return
//     }
// });

// fs.readFile('test.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.error(err)
//         return
//     }

//     console.log(data)
// });

// console.log("------------", '\n',);

// deleting a file

let fs = require('fs');
fs.unlink('test.txt', function (err) {
    console.log('write operation complete.');
});



