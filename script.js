var numbers = [ 11, 22, 33, 44, 55];

function add10(num){

    return num + 10

}
var newarray = numbers.map(add10);

document.getElementById("productvalue").innerHTML = newarray;

function evaluate(){

var x = 215;
var y = 547;

var a = eval("x + y") + "<br>";


var res = a;
document.getElementById("eval").innerHTML = res;
}


var points = [67 , 45 , 737848737 , 98]

function hamburger(){
 points.sort (function(a, b){return a - b});

 document.getElementById("reser").innerHTML = points;
 



}

