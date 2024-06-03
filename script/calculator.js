class Calculator {
    constructor() {
      this.firstNumber = '';
      this.secondNumber = '';
      this.operation = '';
    }
  
    setFirstNumber(number) {
      this.firstNumber = number;
    }
  
    setSecondNumber(number) {
      this.secondNumber = number;
    }
  
    setOperation(operation) {
      this.operation = operation;
    }
  
    calculate() {
      const num1 = parseFloat(this.firstNumber);
      const num2 = parseFloat(this.secondNumber);
  
      switch (this.operation) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          if (num2 === 0) {
            throw new Error("Division by zero is not allowed.");
          }
          return num1 / num2;
        default:
          return "Invalid operation";
      }
    }
  }
  
  
  const calc = new Calculator();
  
  function addToInput(val) {
    if (calc.operation === '') {
      const input = document.getElementById("firstNumber");
      input.value += val;
      calc.setFirstNumber(input.value);
    } else {
      const input = document.getElementById("secondNumber");
      input.value += val;
      calc.setSecondNumber(input.value);
    }
  }
  
  function setOperation(operation) {
    calc.setOperation(operation);
    document.getElementById("secondNumber").focus();
  }
  
  function calculate() {
    try {
      const result = calc.calculate();
      document.getElementById("result").innerText = result;
    } catch (error) {
      document.getElementById("result").innerText = error.message;
    }
  }
  
  function clearInput() {
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
    document.getElementById("result").innerText = "";
    calc.setFirstNumber('');
    calc.setSecondNumber('');
    calc.setOperation('');
  }