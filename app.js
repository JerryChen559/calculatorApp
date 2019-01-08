let app = angular.module("calcApp", []);
app.controller("Calc", Calc);

function Calc() {
  this.buttonClicked = function(button) {
    this.selectedOperation = button;
  };
  this.total = 0;
  this.calculateSolution = function() {
    let a = parseFloat(this.num1);
    let b = parseFloat(this.num2);
    if (this.selectedOperation === "+") {
      this.total = a + b;
    }
    if (this.selectedOperation === "-") {
      this.total = a - b;
    }
    if (this.selectedOperation === "*") {
      this.total = a * b;
    }
    if (this.selectedOperation === "/") {
      this.total = a / b;
    }
  };
}
