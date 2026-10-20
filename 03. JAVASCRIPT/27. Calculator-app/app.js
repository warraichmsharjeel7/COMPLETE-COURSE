 

// var displayValue = document.getElementById("displayValue");

// var firstNumber = "";
// var selectedOperator = "";
// var secondNumber = "";
// var isOperatorClicked = false;

// function number(val) {
//   if (isOperatorClicked === false) {
//     firstNumber += val;
//     displayValue.value = firstNumber;
//   } else {
//     secondNumber += val;
//     displayValue.value = firstNumber + selectedOperator + secondNumber;
//   }
// }

// function operator(op) {
//   if (firstNumber === "") {
//     return;
//   }

//   if (selectedOperator !== "" && secondNumber === "") {
//     selectedOperator = op;
//     displayValue.value = firstNumber + selectedOperator;
//     return;
//   }

//   selectedOperator = op;
//   isOperatorClicked = true;
//   displayValue.value = firstNumber + selectedOperator;
// }

// function decimalPoint() {
//   if (isOperatorClicked === false) {
//     if (!firstNumber.includes(".")) {
//       firstNumber += ".";
//       displayValue.value = firstNumber;
//     }
//   } else {
//     if (!secondNumber.includes(".")) {
//       secondNumber += ".";
//       displayValue.value = firstNumber + selectedOperator + secondNumber;
//     }
//   }
// }

// function calculate() {
//   if (firstNumber === "" || selectedOperator === "" || secondNumber === "") {
//     return ;
//   }

//   var num1 = Number(firstNumber);
//   var num2 = Number(secondNumber);
//   var result;

//   switch (selectedOperator) {
//     case "+":
//       result = num1 + num2;
//       break;

//     case "-":
//       result = num1 - num2;
//       break;

//     case "*":
//       result = num1 * num2;
//       break;

//     case "/":
//      if(num2 === 0) {
//           result = " "
//           alert("0 is Not Allowed")
//           break;
//      } else {
//           result = num1 / num2;
//           break;
//      }

//     case "%":
//       result = num1 % num2;
//       break;
//   }

//   displayValue.value = result;

//   firstNumber = result.toString();
//   secondNumber = "";
//   selectedOperator = "";
//   isOperatorClicked = false;
// }

// function clearBtn() {
//   displayValue.value = "";
//   firstNumber = "";
//   secondNumber = "";
//   selectedOperator = "";
//   isOperatorClicked = false;
// }

// function deleteBtn() {
//   if (secondNumber !== "") {
//     secondNumber = secondNumber.slice(0, -1);
//   } else if (selectedOperator !== "") {
//     selectedOperator = "";
//     isOperatorClicked = false;
//   } else if (firstNumber !== "") {
//     firstNumber = firstNumber.slice(0, -1);
//   }

//   displayValue.value = firstNumber + selectedOperator + secondNumber;
// //   displayValue.value = displayValue.value.slice(0, -1)
// }

// var characterTop;

// document.addEventListener('keydown', function (event) {
//   console.log(`Key pressed: ${event.key}`);

//   if(event.key === "Shift"){
//      alert("Shift key is pressed")
//      characterTop = 10px
//   }
// });


 
