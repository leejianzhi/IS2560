/********************************************
****************Drop and Drag****************
*********************************************/

/* JS code modified from w3schools */
/*Source code URL: https://www.w3schools.com/html/html5_draganddrop.asp*/


//Make the DIV element draggagle:

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}