
function calculate() {

    var firstValue = document.getElementById('firstValue').value;
    var operator = document.getElementById('autoSizingSelect').value;
    var secondValue = document.getElementById('secondValue').value;


    if(isNaN(firstValue)|| isNaN(secondValue)){
         document.getElementById('result').value = "Please Enter Valid Number";
         document.getElementById('result').setAttribute('style', 'background-color: yellow; color:red; text-align: center;');
        return;
    }

  

     firstValue  =parseFloat(firstValue);
     secondValue =parseFloat(secondValue);
  
    var result;
    if (operator === 'add') {
        result = firstValue + secondValue;
    } else if (operator === 'subtract') {
        result = firstValue - secondValue;
    } else if (operator === 'multiply') {
        result = firstValue * secondValue;
    } else if (operator === 'divide') {
        if (secondValue !== 0) {
            result = firstValue / secondValue;
        } else {
            result = 'Cannot divide by zero';
        }
    } else {
        result = 'Invalid operator';
    }
   
    document.getElementById('result').value = "Result: " + result;
    document.getElementById("result").style.backgroundColor = "yellow";
}
