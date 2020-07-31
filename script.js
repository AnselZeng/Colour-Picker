function changeColor() {
    let color = document.getElementById('inputColorPalette').value;
    document.body.style.backgroundColor = color;
    document.getElementById('colorOutput').value = color;
}