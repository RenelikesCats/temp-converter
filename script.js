//if you are reading this, hello :)

const tempInput = document.getElementById("tempValue");
const darkBtn = document.getElementById("darkBtn");
const body = document.getElementsByTagName("body")[0];
const con = document.getElementById("container");
const submitBtn = document.getElementById("submit");

//dark mode 
darkBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.style.transition = "0.4s";

    con.classList.toggle("darkContainer");
    con.style.transition = "0.4s";
    darkBtn.classList.toggle("darkBtnClass");

    if (con.classList.contains("darkContainer") && body.classList.contains("dark") === true) {
        darkBtn.innerText = "🔆"
    }
    else {
        darkBtn.innerText = "🌙"
    }
});

//disable space
tempInput.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        event.preventDefault();
    }
});

function submitter() {
    const selected = document.getElementById("tempUnit").value;
    const convertSelect = document.getElementById("tempConvert").value;
    const tempInput = document.getElementById("tempValue");
    let temp;

    //replace , with . 
    tempInput.value = tempInput.value.replace(",", ".");

    //feedback if user has not input number
    if (tempInput.value === "") {
        result.textContent = "Please enter number";
        return;
    }

    if (isNaN(tempInput.value)) {
        result.textContent = "Please enter a valid number";
        return;
    }

    // Convert the input value to a number
    const inputValue = Number(tempInput.value);

    // Perform temperature conversion based on selected units
    switch (selected) {
        case "Celsius":
            if (convertSelect === "Fahrenheit") {
                temp = inputValue * 9 / 5 + 32;
                result.textContent = temp.toFixed(2) + " °F";
            }
            else if (convertSelect === "Kelvin") {
                temp = inputValue + 273.15;
                result.textContent = temp.toFixed(2) + " K";
            } else { // Celsius to Celsius
                temp = inputValue;
                result.textContent = temp.toFixed(2) + " °C";
            }
            break;

        case "Fahrenheit":
            if (convertSelect === "Celsius") {
                temp = (inputValue - 32) * (5 / 9);
                result.textContent = temp.toFixed(2) + " °C";
            }
            else if (convertSelect === "Kelvin") {
                temp = (inputValue - 32) * (5 / 9) + 273.15;
                result.textContent = temp.toFixed(2) + " K";

            } else { // Fahrenheit to Fahrenheit
                temp = inputValue;
                result.textContent = temp.toFixed(2) + " °F";
            }
            break;

        case "Kelvin":
            if (convertSelect === "Celsius") {
                temp = inputValue - 273.15;
                result.textContent = temp.toFixed(2) + " °C";
            }
            else if (convertSelect === "Fahrenheit") {
                temp = (inputValue - 273.15) * 1.8 + 32;
                result.textContent = temp.toFixed(2) + " °F";
            } else { // Kelvin to Kelvin
                temp = inputValue;
                result.textContent = temp.toFixed(2) + " K";
            }
            break;
    }
}
