fuction makeGrid()
const cancas = document.getElementById("pixelCanvas");
const gc = document.getElementById("colorPicker");
const gh = document.getElementById("inputheight");
const gw = document.getElementById("inputwidth");
html = '',
for (var i=o; i<gh; i++) {
html+=<'tr'>;
for (var j=0; j<gw; j++) {
html+="<td onclick = 'this.style.background'></td>;
}
html+=</tr>
}
table.innerhtml = html;
return false;
}
function setColor() {
const gc = document.getElementById("colorPicker").value;
return gc;
}
