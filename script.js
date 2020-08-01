function changeColor() {
    let color = document.getElementById('inputColorPalette').value;
    document.body.style.backgroundColor = color;
    document.getElementById('colorOutputHEX').value = color;
}

/*
function changeColor() {
    let color = document.getElementById('inputColorText').value;
    document.body.style.backgroundColor = color;
    document.getElementById('colorOutput').value = color;
}
*/