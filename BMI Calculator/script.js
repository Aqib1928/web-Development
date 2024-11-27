function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2); // BMI formula
    const category = getBMICategory(bmi);

    displayResult(bmi, category);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi <= 24.9) return "Normal weight";
    if (bmi >= 25 && bmi <= 29.9) return "Overweight";
    return "Obesity";
}

function displayResult(bmi, category) {
    const resultContainer = document.getElementById("bmi-result");
    resultContainer.innerHTML = `
        <p><strong>BMI:</strong> ${bmi}</p>
        <p><strong>Category:</strong> ${category}</p>
    `;
}
