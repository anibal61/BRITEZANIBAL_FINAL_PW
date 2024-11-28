function performOperation(operation) {
    let num1, num2, result;
    
    switch(operation) {
        case 'multiply':
            num1 = parseFloat(prompt("Ingrese el primer número:"));
            num2 = parseFloat(prompt("Ingrese el segundo número:"));
            if (isNaN(num1) || isNaN(num2)) {
                alert("Por favor, ingrese números válidos.");
                return;
            }
            result = num1 * num2;
            displayResult(`${num1} x ${num2} = ${result}`);
            break;
        
        case 'square':
            num1 = parseFloat(prompt("Ingrese un número:"));
            if (isNaN(num1)) {
                alert("Por favor, ingrese un número válido.");
                return;
            }
            result = num1 * num1;
            displayResult(`${num1}² = ${result}`);
            break;
        
        case 'subtract':
            num1 = parseFloat(prompt("Ingrese el primer número:"));
            num2 = parseFloat(prompt("Ingrese el segundo número:"));
            if (isNaN(num1) || isNaN(num2)) {
                alert("Por favor, ingrese números válidos.");
                return;
            }
            result = num1 - num2;
            displayResult(`${num1} - ${num2} = ${result}`);
            break;
    }
}

function displayResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
    resultDiv.style.display = 'block';
}