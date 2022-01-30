const canvas = document.getElementById("pixelCanvas");
const colorPicker = document.getElementById("colorPicker");
const height = document.getElementById("inputheight");
const width = document.getElementById("inputwidth");
const form = document.getElementById("sizePicker");
sizePicker.addEventListener("submit", function(evt) {
    let tbl = document.getElementById("pixelCanvas");
	while (tbl.tBodies[0].hasChildNodes()) {
		tbl.tBodies[0].removeChild(tbl.tBodies[0].lastChild);
    }
    makeGrid(height.value, width.value);
});
pixelCanvas.addEventListener('click',function(e) {
if (e.target.nodeName === 'TD') {
e.target.style.backgroundColor = colorPicker.value;
}
});
funtion makeGrid(height,width) {
for (let i=0; i<height.value; i++) {
const row = canavasinsertRow(0);
for (let j=0; j<width.value; j++) {
row.insertcell(0);
}
}
}
