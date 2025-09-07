const display = document.getElementById('display');

function appendToDisplay(value) {
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];
    
    if (operators.includes(value) && operators.includes(lastChar)) {
        return;
    }
    
    if (value === '.') {
        const parts = display.value.split(/[\+\-\*\/\%]/);
        const lastPart = parts[parts.length - 1];
        if (lastPart.includes('.')) {
            return;
        }
    }
    
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

function calculate() {
    try {
        if (display.value === '') return;
        
        let expression = display.value;
        
        // Handle percentage: convert 5% to 5/100
        expression = expression.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)');
        
        // Handle percentage in calculations like 100+10% = 100+10
        expression = expression.replace(/(\d+(?:\.\d+)?)\+(\d+(?:\.\d+)?)%/g, '$1+($1*$2/100)');
        expression = expression.replace(/(\d+(?:\.\d+)?)\-(\d+(?:\.\d+)?)%/g, '$1-($1*$2/100)');
        
        const result = eval(expression);


        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = Math.round(result * 100000000) / 100000000;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (['+', '-', '*', '/', '%', '.'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    }
    
    event.preventDefault();
});