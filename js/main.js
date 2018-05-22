

 function btm(val) {
         document.getElementById("calc-output").innerHTML += val;
     }
     function btmClean(){
        document.getElementById("calc-output").innerHTML = "";
     }
     function btmPlus() {
        document.getElementById("calc-output").innerHTML += "+";
     }
     function btmLess() {
        document.getElementById("calc-output").innerHTML += "-";
     }
     function btmMultiply() {
        document.getElementById("calc-output").innerHTML += "*";
     }
     function btmDivision() {
        document.getElementById("calc-output").innerHTML += "/";
     }

     function btmEgal() {
          var egal = eval(document.getElementById('calc-output').innerHTML);
          document.getElementById('calc-output').innerHTML = egal;
      }

 function add(a,b) {
    return a+b ;
 } 

 function substract(a,b) {
    return a-b ;
 }

 function multiply(a,b) {
    return a*b ;
 }

 function divide(a,b) {
    return a/b ;
 }

 function calculate(a,operat,b) {
    switch (operat){
        case "+":
            return add(a,b);
        case "-":
            return substract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        
    }
 }

    var t = document.getElementById('calc-output').innerHTML;
    function result(a) {
    var tab = a.slice();
    
 } 