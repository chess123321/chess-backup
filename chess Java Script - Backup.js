//Make the DIV element draggagle:
dragElement(document.getElementById("blackking"));
dragElement(document.getElementById("blackknight1"));
dragElement(document.getElementById("whiteknight2"));
dragElement(document.getElementById("whiteknight1"));
dragElement(document.getElementById("blackknight2"));
dragElement(document.getElementById("whitepawn1"));
dragElement(document.getElementById("whitepawn2"));
dragElement(document.getElementById("whitepawn3"));
dragElement(document.getElementById("whitepawn4"));
dragElement(document.getElementById("whitepawn5"));
dragElement(document.getElementById("whitepawn6"));
dragElement(document.getElementById("whitepawn7"));
dragElement(document.getElementById("whitepawn8"));
dragElement(document.getElementById("blackpawn1"));
dragElement(document.getElementById("blackpawn2"));
dragElement(document.getElementById("blackpawn3"));
dragElement(document.getElementById("blackpawn4"));
dragElement(document.getElementById("whiteking"));
dragElement(document.getElementById("blackpawn5"));
dragElement(document.getElementById("blackpawn6"));
dragElement(document.getElementById("blackpawn7"));
dragElement(document.getElementById("blackpawn8"));
dragElement(document.getElementById("whitebishop1"));
dragElement(document.getElementById("whitebishop2"));
dragElement(document.getElementById("blackbishop1"));
dragElement(document.getElementById("blackbishop2"));
dragElement(document.getElementById("blackqueen"));
dragElement(document.getElementById("whitequeen"));
dragElement(document.getElementById("whiterook1"));
dragElement(document.getElementById("whiterook2"));
dragElement(document.getElementById("blackrook1"));
dragElement(document.getElementById("blackrook2"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
