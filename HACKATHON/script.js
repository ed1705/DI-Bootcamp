

// let boxToD = document.getElementsByClassName("boxToDrop")
// for (let i = 0; i < boxToD.length; i++) {
// 	let item =  document.getElementsByClassName("boxToDrop")[i];
// 	item.addEventListener("dragstart", startDragging);

// 	let boxToD = document.getElementsByClassName("ids")
// for (let i = 0; i < boxToD.length; i++) {
// 	let item =  document.getElementsByClassName("ids")[i];
// 	item.addEventListener("dragstart", startDragging);

// item.addEventListener("dragstart", startDragging);function startDragging (evt) {
// 	item.classList.replace("draggedItem", "startDragging");
// 	item.id = "used";
// 	// in the future, I will drop an element of type
// 	// "text/plain" because it's an element from the DOM
// 	// and I will use the id of the item
// 	console.log(evt.dataTransfer)
// 	evt.dataTransfer.setData("text/plain", evt.target.id);
// 	// this line prepares what will happen in the drop
// 	console.log(evt.dataTransfer)
//  }}

// //retrieve all the dropzones
// let alldropzones = document.getElementsByClassName("dropzone");

// function manipulateDropZone(){
// 	for (let zone of alldropzones){
// 		zone.addEventListener("dragover", draggingOver);
// 		zone.addEventListener("drop", dropping)
// 	}
// }

// manipulateDropZone()

// function draggingOver(evt){
// 	evt.preventDefault()
// 	evt.target.style.border = "2px dashed red";
// 	 // evt.dataTransfer.dropEffect = 'move';
//   // return false;
// }

// function dropping(evt){
// 	evt.preventDefault();
// 	let dataNeeded = evt.dataTransfer.getData("text/plain");
// 	let box = document.getElementById(dataNeeded);
// 	evt.target.appendChild(box)
// }
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
});



