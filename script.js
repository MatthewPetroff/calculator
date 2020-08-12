let operation = null;
let operationClicked = false;
let memory = null;
let calculatedNum = null;
let displayNum = '0';


function display(string) {
	document.getElementById('display').textContent = string;
}

function updateDisplayNum(char) {
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
			return;				
	}
}

//Operation Keys
document.getElementById('add').addEventListener('click', function(e) {
	if (operationClicked) {return};

	if (calculatedNum === null) {
		calculatedNum = displayNum;
	} else {
		calculatedNum = calculate();	
	}
	displayNum = '0';
	display(calculatedNum);
	operation = 'add';
	operationClicked = true;
});

document.getElementById('subtract').addEventListener('click', function(e) {
	if (operationClicked) {return};

	if (calculatedNum === null) {
		calculatedNum = displayNum;
	} else {
		calculatedNum = calculate();	
	}
	displayNum = '0';
	display(calculatedNum);
	operation = 'subtract';
	operationClicked = true;
});

document.getElementById('multiply').addEventListener('click', function(e) {
	if (operationClicked) {return};

	if (calculatedNum === null) {
		calculatedNum = displayNum;
	} else {
		calculatedNum = calculate();	
	}
	displayNum = '0';
	display(calculatedNum);
	operation = 'multiply';
	operationClicked = true;
});

document.getElementById('divide').addEventListener('click', function(e) {
	if (operationClicked) {return};

	if (calculatedNum === null) {
		calculatedNum = displayNum;
	} else {
		calculatedNum = calculate();	
	}
	displayNum = '0';
	display(calculatedNum);
	operation = 'divide';
	operationClicked = true;
});

document.getElementById('equals').addEventListener('click', function(e) {
	if (operationClicked) {return};

	if (calculatedNum === null) {
		calculatedNum = displayNum;
	} else {
		calculatedNum = calculate();			
	}
	displayNum = calculatedNum;
	display(calculatedNum);
	operation = null;
	calculatedNum = null;
});

//Number Keys
document.getElementById('zero').addEventListener('click', function(e) {
	updateDisplayNum('0');
	display(displayNum);
	operationClicked = false;
});

document.getElementById('one').addEventListener('click', function(e) {
	updateDisplayNum('1');	
	display(displayNum);
	operationClicked = false;	
});

document.getElementById('two').addEventListener('click', function(e) {
	updateDisplayNum('2');	
	display(displayNum);
	operationClicked = false;		
});

document.getElementById('three').addEventListener('click', function(e) {
	updateDisplayNum('3');
	display(displayNum);
	operationClicked = false;		
});

document.getElementById('four').addEventListener('click', function(e) {
	updateDisplayNum('4');	
	display(displayNum);
	operationClicked = false;		
});

document.getElementById('five').addEventListener('click', function(e) {
	updateDisplayNum('5');	
	display(displayNum);
	operationClicked = false;		
});

document.getElementById('six').addEventListener('click', function(e) {
	updateDisplayNum('6');	
	display(displayNum);
	operationClicked = false;		
});

document.getElementById('seven').addEventListener('click', function(e) {
	updateDisplayNum('7');
	display(displayNum);
	operationClicked = false;		
});

document.getElementById('eight').addEventListener('click', function(e) {
	updateDisplayNum('8');
	display(displayNum);
	operationClicked = false;		
});

document.getElementById('nine').addEventListener('click', function(e) {
	updateDisplayNum('9');		
	display(displayNum);
	operationClicked = false;	
});

document.getElementById('decimal').addEventListener('click', function(e) {
	if (noDecimal()) {
		updateDisplayNum('.');
	}	
	display(displayNum);
	operationClicked = false;	
});

//Other Keys
document.getElementById('clear').addEventListener('click', function(e) {
	operation = null;
	calculatedNum = null;
	displayNum = '0';
	display(displayNum);
	operationClicked = false;
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