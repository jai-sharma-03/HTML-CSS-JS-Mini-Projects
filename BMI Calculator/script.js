// Active funtions on Button Clicks
window.onload = () =>{
    document.querySelector("#calculate").addEventListener('click',calculateBMI);
    document.querySelector("#reset").addEventListener('click',resetInputs);
}

function calculateBMI() {
    // Get the weight and height inputs
    var weight = parseFloat(document.getElementById("weightInput").value);
    var height = parseFloat(document.getElementById("heightInput").value);

    // Check if inputs are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").textContent = "Please enter valid weight and height.";
        return;
    }

    // Calculate BMI
    var bmi = weight / ((height / 100) * (height / 100));

    var category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display the result
    document.getElementById("result").textContent = "Your BMI is: " + bmi.toFixed(2)+". You are "+category+ ".";
}

function resetInputs() {
    // Clear the input fields
    document.getElementById("weightInput").value = "";
    document.getElementById("heightInput").value = "";
    // Reset the result
    document.getElementById("result").textContent = "";
}
