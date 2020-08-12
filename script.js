let calculatedNum = null;
let memory = null;
let operation = null;
let operationClicked = false;
let displayNum = '0';

function display(string) {
	if (Number(string) > 999999999.9) {
		document.getElementById('display').textContent = 'TOO LARGE';
	} else if (string.length > 11) {
		document.getElementById('display').textContent = string.slice(0, 12);	
	} else {
		document.getElementById('display').textContent = string;	
	}
}

function updateDisplayNum(char) {
	if (displayNum.length < 11) {
		if (displayNum === '0') {
			if (char === '.') {
				displayNum = '0.';
			} else {
				displayNum = char;	
			}
		} else {
			displayNum += char;
		}
	}
	display(displayNum);
	operationClicked = false;
}

function notZero() {
	if (displayNum != '0') {
		return true;
	} else {
		return false;
	}
}

function noDecimal() {
	for (let i = 0; i < displayNum.length; i++) {
		if (displayNum[i] === '.') {
			return false;
		}
	}
	return true;
}

function calculate() {
	switch (operation) {
		case 'add':
			return (Number(calculatedNum) + Number(displayNum)).toString();
		case 'subtract':
			return (Number(calculatedNum) - Number(displayNum)).toString();
		case 'multiply':
			return (Number(calculatedNum) * Number(displayNum)).toString();
		case 'divide':
			if (displayNum === '0') {
				return 'DIV 0 ERROR';
			}
			return (Number(calculatedNum) / Number(displayNum)).toString();
		default:
			return displayNum;				
	}
}

function clickOperation(type) {
	if (operationClicked) {
		return;
	};
	calculatedNum = calculate();	
	displayNum = '0';
	display(calculatedNum);
	operation = type;
	operationClicked = true;
}

//Operation Keys
document.getElementById('add').addEventListener('click', function(e) {
	clickOperation('add');
});

document.getElementById('subtract').addEventListener('click', function(e) {
	clickOperation('subtract');
});

document.getElementById('multiply').addEventListener('click', function(e) {
	clickOperation('multiply');
});

document.getElementById('divide').addEventListener('click', function(e) {
	clickOperation('divide');
});

document.getElementById('equals').addEventListener('click', function(e) {
	if (operationClicked) {
		return;
	};
	calculatedNum = calculate();			
	displayNum = calculatedNum;
	display(calculatedNum);
	operation = null;
	calculatedNum = null;
});

//Number Keys
document.getElementById('zero').addEventListener('click', function(e) {
	updateDisplayNum('0');
});

document.getElementById('one').addEventListener('click', function(e) {
	updateDisplayNum('1');		
});

document.getElementById('two').addEventListener('click', function(e) {
	updateDisplayNum('2');			
});

document.getElementById('three').addEventListener('click', function(e) {
	updateDisplayNum('3');	
});

document.getElementById('four').addEventListener('click', function(e) {
	updateDisplayNum('4');		
});

document.getElementById('five').addEventListener('click', function(e) {
	updateDisplayNum('5');			
});

document.getElementById('six').addEventListener('click', function(e) {
	updateDisplayNum('6');			
});

document.getElementById('seven').addEventListener('click', function(e) {
	updateDisplayNum('7');		
});

document.getElementById('eight').addEventListener('click', function(e) {
	updateDisplayNum('8');	
});

document.getElementById('nine').addEventListener('click', function(e) {
	updateDisplayNum('9');		
});

document.getElementById('decimal').addEventListener('click', function(e) {
	if (noDecimal()) {
		updateDisplayNum('.');
	}
});

//Other Keys
document.getElementById('clear').addEventListener('click', function(e) {
	calculatedNum = null;
	memory = null;
	operation = null;	
	operationClicked = false;
	displayNum = '0';
	display(displayNum);
});

document.getElementById('memory-save').addEventListener('click', function(e) {
	memory = displayNum;
	operationClicked = false;
});

document.getElementById('memory-clear').addEventListener('click', function(e) {
	memory = null;
	operationClicked = false;
});

document.getElementById('memory-recall').addEventListener('click', function(e) {
	if (memory != null) {
		displayNum = memory;
		display(displayNum);
	}
	operationClicked = false;
});