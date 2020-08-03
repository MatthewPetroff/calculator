let memoryRecall = null;
let memory = null;

function getDisplayNumber() {
	return document.getElementById('display').innerHTML;
}

function notZero(){
	let displayNum = document.getElementById('display').innerHTML;
	if (displayNum != '0') {
		return true;
	} else {
		return false;
	}
}

function noDecimal() {
	let displayNum = document.getElementById('display').innerHTML;
	for (let i = 0; i < displayNum.length; i++) {
		if (displayNum[i] === '.') {
			return false;
		}
	}
	return true;
}

function appendDigits(num) {
	if (getDisplayNumber() === '0') {
		document.getElementById('display').innerHTML = num;	
	} else {
		document.getElementById('display').innerHTML += num;
	}
}

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

document.getElementById('clear').addEventListener('click', function(e) {
	document.getElementById('display').innerHTML = '0';
});

document.getElementById('memory-save').addEventListener('click', function(e) {
	memoryRecall = document.getElementById('display').innerHTML;
});

document.getElementById('memory-clear').addEventListener('click', function(e) {
	memoryRecall = null;
});

document.getElementById('memory-recall').addEventListener('click', function(e) {
	if (memoryRecall != null) {
		document.getElementById('display').innerHTML = memoryRecall;	
	}
});

document.getElementById('seven').addEventListener('click', function(e) {
	appendDigits('7');
});

document.getElementById('eight').addEventListener('click', function(e) {
	appendDigits('8');
});

document.getElementById('nine').addEventListener('click', function(e) {
	appendDigits('9');
});

document.getElementById('divide').addEventListener('click', function(e) {});

document.getElementById('four').addEventListener('click', function(e) {
	appendDigits('4');
});

document.getElementById('five').addEventListener('click', function(e) {
	appendDigits('5');
});

document.getElementById('six').addEventListener('click', function(e) {
	appendDigits('6');
});

document.getElementById('multiply').addEventListener('click', function(e) {});

document.getElementById('one').addEventListener('click', function(e) {
	appendDigits('1');
});

document.getElementById('two').addEventListener('click', function(e) {
	appendDigits('2');
});

document.getElementById('three').addEventListener('click', function(e) {
	appendDigits('3');
});

document.getElementById('subtract').addEventListener('click', function(e) {});

document.getElementById('decimal').addEventListener('click', function(e) {
	if (noDecimal()) {
		if (notZero()) {
			appendDigits('.');
		} else {
			document.getElementById('display').innerHTML = '0.';
		}
	}
});

document.getElementById('zero').addEventListener('click', function(e) {
	appendDigits('0');
});

document.getElementById('equals').addEventListener('click', function(e) {});

document.getElementById('add').addEventListener('click', function(e) {});
