function Solve(val) {
    var v = document.getElementById('input');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('input').value;
    var num2 = eval(num1);
    document.getElementById('input').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('input');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('input');
    ev.value = ev.value.slice(0,-1);
 }