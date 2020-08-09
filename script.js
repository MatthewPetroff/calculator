let operation = null;
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
			return toString(Number(calculatedNum) + Number(displayNum));
		case 'subtract':
			return toString(Number(calculatedNum) - Number(displayNum));
		case 'multiply':
			return toString(Number(calculatedNum) * Number(displayNum));
		case 'divide':
			return toString(Number(calculatedNum) / Number(displayNum));
		default:
			return;				
	}
}

//Operation Keys
document.getElementById('add').addEventListener('click', function(e) {
	if (operation === null) {
		calculatedNum = displayNum;
	} else {
		calculatedNum = calculate();	
	}
	displayNum = '0';
	display(calculatedNum);
	operation = 'add';
});

document.getElementById('subtract').addEventListener('click', function(e) {
	if (operation === null) {
		calculatedNum = displayNum;
	} else {
		calculatedNum = calculate();	
	}
	displayNum = '0';
	display(calculatedNum);
	operation = 'subtract';
});

document.getElementById('multiply').addEventListener('click', function(e) {
	if (operation === null) {
		calculatedNum = displayNum;
	} else {
		calculatedNum = calculate();	
	}
	displayNum = '0';
	display(calculatedNum);
	operation = 'multiply';
});

document.getElementById('divide').addEventListener('click', function(e) {
	if (operation === null) {
		calculatedNum = displayNum;
	} else {
		calculatedNum = calculate();	
		//need to account for divide by zero		
	}
	displayNum = '0';
	display(calculatedNum);
	operation = 'divide';
});

document.getElementById('equals').addEventListener('click', function(e) {
	if (operation === null) {
		calculatedNum = displayNum;
	} else {
		calculatedNum = calculate();	
		//need to account for divide by zero		
	}
	displayNum = '0';
	display(calculatedNum);
	operation = null;
});

//Number Keys
document.getElementById('zero').addEventListener('click', function(e) {
	updateDisplayNum('0');
	display(displayNum);
});

document.getElementById('one').addEventListener('click', function(e) {
	updateDisplayNum('1');	
	display(displayNum);	
});

document.getElementById('two').addEventListener('click', function(e) {
	updateDisplayNum('2');	
	display(displayNum);		
});

document.getElementById('three').addEventListener('click', function(e) {
	updateDisplayNum('3');
	display(displayNum);		
});

document.getElementById('four').addEventListener('click', function(e) {
	updateDisplayNum('4');	
	display(displayNum);		
});

document.getElementById('five').addEventListener('click', function(e) {
	updateDisplayNum('5');	
	display(displayNum);		
});

document.getElementById('six').addEventListener('click', function(e) {
	updateDisplayNum('6');	
	display(displayNum);		
});

document.getElementById('seven').addEventListener('click', function(e) {
	updateDisplayNum('7');
	display(displayNum);		
});

document.getElementById('eight').addEventListener('click', function(e) {
	updateDisplayNum('8');
	display(displayNum);		
});

document.getElementById('nine').addEventListener('click', function(e) {
	updateDisplayNum('9');		
	display(displayNum);	
});

document.getElementById('decimal').addEventListener('click', function(e) {
	if (noDecimal()) {
		updateDisplayNum('.');
	}	
	display(displayNum);	
});

//Other Keys
document.getElementById('clear').addEventListener('click', function(e) {
	operation = null;
	calculatedNum = null;
	displayNum = '0';
	display(displayNum);
});

document.getElementById('memory-save').addEventListener('click', function(e) {
	memory = displayNum;
});

document.getElementById('memory-clear').addEventListener('click', function(e) {
	memory = null;
});

document.getElementById('memory-recall').addEventListener('click', function(e) {
	if (memory != null) {
		displayNum = memory;
		display(displayNum);
	}
});