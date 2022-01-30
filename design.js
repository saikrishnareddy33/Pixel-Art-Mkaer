fuction makeGrid()
const canvas = document.getElementById("pixelCanvas");
const color = document.getElementById("colorPicker");
const height = document.getElementById("inputheight");
const width = document.getElementById("inputwidth");
html = '',
for (var i=o; i<height.value; i++) {
html+=<'tr'>;
for (var j=0; j<width.value; j++) {
html+="<td onclick = 'this.style.background'></td>;
}
html+=</tr>
}
table.innerhtml = html;
return false;
}
function setColor() {
const color = document.getElementById("colorPicker").value;
return color;
}
