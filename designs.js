// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


var grid = function makeGrid(e) {

// Your code goes here!
$("#pixelCanvas").empty();
var gheight = 	$("#inputHeight").val();
var gwidth 	= 	$("#inputWeight").val();

e.preventDefault();

var rows = "";
console.log( 'Log message:' + gheight + gwidth );
for(i = 0; i < gheight; i++){
    rows += "<tr>";
    for(j = 0; j < gwidth; j++){
        rows += "<td></td>";
    }
    rows += "</tr>";
}
console.log(rows);
$("#pixelCanvas").append(rows);
}

$("#submit").on("click",grid);

$("#pixelCanvas").on("click", "td", function () {
   const col = $("#colorPicker").val();
   $(this).css('background-color', col);
});

