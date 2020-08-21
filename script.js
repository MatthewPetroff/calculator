let calculatedNum = null;
let memory = null;
let operation = null;
let operationClicked = false;
let displayNum = '0';

function display(string) {
	const tooLarge = (Number(string) > 99999999999.9);
	const tooLong = (string.length > 13);
	const display = document.getElementById('display-text');
	if (tooLarge) {
		display.textContent = 'TOO LARGE';
	} else if (tooLong) {
		display.textContent = string.slice(0, 14);	
	} else {
		display.textContent = string;	
	}
}

function updateDisplayNum(char) {
	const displayNotFull = (displayNum.length < 14);
	if (displayNotFull) {
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
document.querySelectorAll('.operation').forEach(operationBtn => {
	operationBtn.addEventListener('click', (e) => {
		clickOperation(e.target.value);
	})
})

//Number Keys
document.querySelectorAll('.number').forEach(numberBtn => {
	numberBtn.addEventListener('click', (e) => {
		updateDisplayNum(e.target.textContent);
	})
})

//Other Keys
document.getElementById('decimal').addEventListener('click', function(e) {
	if (!displayNum.includes('.')) {
		updateDisplayNum('.');
	}
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