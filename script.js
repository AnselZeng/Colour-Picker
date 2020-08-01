
const ready = () => {
    let red = 130
    let green = 130
    let blue = 130
    const input = document.querySelectorAll("input");
    const display = document.querySelector(".display");

    for (var i = 0; i < input.length; i++) {
        input[i].addEventListener("input", function () {
            red = document.getElementById("red").value
            green = document.getElementById("green").value
            blue = document.getElementById("blue").value;
            
            display.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
            
            outputValue(Number(red), Number(green), Number(blue))
        });
    }
    
    const outputValue = (r, g, b) => {
        red = r
        green = g
        blue = b
        const hex = document.querySelector('.hex')
        const rgb = document.querySelector('.rgb')
        hex.textContent = convertToHex(r, g, b)
        rgb.textContent = `(${r}, ${g}, ${b})`
        return hex
    }

    const convertToHex = (r, g, b) => {
        let result = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        return result
    }
}

ready()

/*
function changeColor() {
    let color = document.getElementById('inputColorText').value;
    document.body.style.backgroundColor = color;
    document.getElementById('colorOutput').value = color;
}
*/