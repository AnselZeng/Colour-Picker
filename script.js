
const ready = () => {
    let red = 130
    let green = 130
    let blue = 130
    const input = document.querySelectorAll("input");
    const display = document.querySelector(".display");
    const shades1 = document.querySelector(".shades1");
    const shades2 = document.querySelector(".shades2");
    const shades3 = document.querySelector(".shades3");
    const shades4 = document.querySelector(".shades4");
    const shades5 = document.querySelector(".shades5");
    const shades6 = document.querySelector(".shades6");

    for (var i = 0; i < input.length; i++) {
        input[i].addEventListener("input", function () {
            red = document.getElementById("red").value
            green = document.getElementById("green").value
            blue = document.getElementById("blue").value;
            
            display.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";

            shades1.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
            shades1.style.background = "hsl(0, 0%, 90%)";
            shades2.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
            shades2.style.background = "hsl(0, 0%, 75%)";
            shades3.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
            shades3.style.background = "hsl(0, 0%, 55%)";
            shades4.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
            shades4.style.background = "hsl(0, 0%, 45%)";
            shades5.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
            shades5.style.background = "hsl(0, 0%, 25%)";
            shades6.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
            shades6.style.background = "hsl(0, 0%, 10%)";

            document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
            
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