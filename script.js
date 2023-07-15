function convertTemp() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputTemperature = document.getElementById('outputTemperature');
    const outputUnit = document.getElementById('outputUnit');

    if (inputUnit === 'celsius') {
        const convertedTemp = (inputTemperature * 9 / 5) + 32;
        outputTemperature.textContent = convertedTemp.toFixed(2);
        outputUnit.textContent = '°F';
    } else if (inputUnit === 'fahrenheit') {
        const convertedTemp = (inputTemperature - 32) * 5 / 9;
        outputTemperature.textContent = convertedTemp.toFixed(2);
        outputUnit.textContent = '°C';
    }
}
const convertBtn = document.getElementById('convertBtn');
convertBtn.addEventListener('click', convertTemp);