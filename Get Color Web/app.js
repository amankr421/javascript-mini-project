// Select elements
let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let div = document.querySelector("div");

// Copy button
let copyBtn = document.createElement("button");
copyBtn.innerText = "📋 Copy Code";
document.body.appendChild(copyBtn);

// Event: Generate random color
btn.addEventListener("click", function () {
    let randomColor = GetRandomColor();
    updateColor(randomColor);
});

// Event: Copy to clipboard
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(h3.innerText);
    alert("Copied: " + h3.innerText);
});

// Function: Generate random color (RGB + HEX)
function GetRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let rgb = `rgb(${red}, ${green}, ${blue})`;
    let hex = rgbToHex(red, green, blue);

    return `${rgb} | ${hex}`;
}

// Function: Convert RGB → HEX
function rgbToHex(r, g, b) {
    return (
        "#" +
        [r, g, b]
            .map((x) => {
                let hex = x.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            })
            .join("")
    );
}

// Function: Update Color
function updateColor(colorText) {
    h3.innerText = colorText;
    let rgbColor = colorText.split(" | ")[0];
    div.style.background = rgbColor;
    console.log("Color updated:", colorText);
}
