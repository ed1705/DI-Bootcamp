var dropTarget = document.querySelector(".wrapper");
var draggables = document.querySelectorAll(".task");

/*
What to Drag - ondragstart and setData()
Then, specify what should happen when the element is dragged.

In the example above, the ondragstart attribute calls a function, 
drag(event), that specifies what data to be dragged.

The dataTransfer.setData() method sets the data type and the 
value of the dragged data:
*/

for(let i = 0; i < draggables.length; i++) {
  draggables[i].addEventListener("dragstart", function (ev) {
     ev.dataTransfer.setData("srcId", ev.target.id);
  });
}

/*
Where to Drop - ondragover
The ondragover event specifies where the dragged data can be dropped.

By default, data/elements cannot be dropped in other 
elements. 
To allow a drop, we must prevent the default handling of 
the element.

This is done by calling the event.preventDefault() method for 
the ondragover event:
*/
let chosen = [];
dropTarget.addEventListener('dragover', function(ev) {
  ev.preventDefault();
});

dropTarget.addEventListener('drop', function(ev) {
  ev.preventDefault();
  let target = ev.target;
  let droppable  = target.classList.contains('box');
  let srcId = ev.dataTransfer.getData("srcId");
  
  if (droppable) {
    ev.target.appendChild(document.getElementById(srcId));
  }
 
//  const element = document.getElementById("myBtn");
// element.addEventListener("click", j);
// function j () {
//     x = (document.getElementById(srcId));
//     x.className +=  " newClassName";
// chosen.push(x)
// console.log(chosen)
// }
// ;


});
 const element = document.getElementById("myBtn");
element.addEventListener("click", j);
function j () {
    x = (document.getElementById(box2));
    console.log(box2);
    // x.className +=  " newClassName";
// chosen.push(x)

console.log(box2);
}
;






