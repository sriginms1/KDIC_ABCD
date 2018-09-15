function add() {
    var operand1 = document.getElementById('oper1').value;
    var operand2 = document.getElementById('oper2').value;

   var sum = parseInt(operand1) + parseInt(operand2);
   console.log("Sum =" + sum)

   document.getElementById('result').innerHTML = sum
}