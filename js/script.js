function policz1() { 

    let a = document.getElementById('a1').value*1; 
    let b = document.getElementById('b1').value*1; 

    document.getElementById('wynik1').innerHTML = "wynik: " + (Math.abs(a - b)); 

} 

function policz2() { 

    let a = document.getElementById('a2').value*1; 
 
    document.getElementById('wynik2').innerHTML = "wynik: " + (Math.acos(a)); 

} 

function policz3() { 

    let a = document.getElementById('a3').value*1; 
 
    document.getElementById('wynik3').innerHTML = "wynik: " + (Math.sqrt(a)); 

} 

function policz4() { 

    let r = document.getElementById('r').value*1; 

    document.getElementById('wynik4').innerHTML = "wynik: " + (Math.PI * Math.pow(r, 2)); 

} 

function policz5() { 

    let a = document.getElementById('a5').value*1; 
 
    document.getElementById('wynik5').innerHTML = "wynik: " + (Math.ceil(a)); 

} 

function policz6() { 

    let a = document.getElementById('a6').value*1; 
    let b = document.getElementById('b6').value*1; 
    let c = document.getElementById('c6').value*1; 

    document.getElementById('wynik6').innerHTML = "wynik: " + (Math.min(a, b, c)); 

} 

function policz7() { 

    let a = document.getElementById('a7').value*1; 

    document.getElementById('wynik7').innerHTML = "wynik: " + (Math.round(a)); 

} 

function policz8() { 

    let a = document.getElementById('a8').value*1; 
    let b = document.getElementById('b8').value*1; 
    let c = document.getElementById('c8').value*1; 

    document.getElementById('wynik8').innerHTML = "wynik: " + (Math.max(a, b, c)); 

} 


function policz9() { 

    let x = document.getElementById('x').value*1; 
    let y = document.getElementById('y').value*1; 

    document.getElementById('wynik9').innerHTML = "wynik: " + (Math.pow(x, y)); 

} 

function policz10() { 

    let a = document.getElementById('a10').value*1; 

    document.getElementById('wynik10').innerHTML = "wynik: " + (Math.floor(a));

} 

function policz11() { 

    let a = document.getElementById('a11').value*1; 

    document.getElementById('wynik11').innerHTML = "wynik: " + (Math.trunc(a));

} 

function policz12() { 

    let x = document.getElementById('x2').value*1; 

    document.getElementById('wynik12').innerHTML = "wynik: " + (Math.sign(x));

} 

function policz13() { 

    let a = document.getElementById('a13').value*1; 
    let b = document.getElementById('b13').value*1;
    document.getElementById('wynik13').innerHTML = "wynik: " + (Math.sin(a * Math.PI / b));

} 

function policz14() { 

    let a = document.getElementById('a14').value*1; 
    let b = document.getElementById('b14').value*1;
    document.getElementById('wynik14').innerHTML = "wynik: " + (Math.random());

    min = Math.ceil(a); 
    max = Math.floor(b); 
    return Math.floor(Math.random() * (a - b + 1) + b); 

} 

function policz15() { 

    let a = document.getElementById('a15').value*1; 
    
    document.getElementById('wynik15').innerHTML = "wynik: " + (Math.tanh(a));

} 

function policz16() { 

    let a = document.getElementById('a16').value*1; 
    let b = document.getElementById('a16').value*1; 
    
    document.getElementById('wynik16').innerHTML = "wynik: " + (Math.hypot(a, b));

} 

function policz17() { 

    let a = document.getElementById('a17').value*1; 
    
    document.getElementById('wynik17').innerHTML = "wynik: " + (Math.exp(a));

}

function policz18() { 

    let a = document.getElementById('a18').value*1; 
    let b = document.getElementById('a18').value*1; 
    
    document.getElementById('wynik16').innerHTML = "wynik: " + (Math.hypot(a, b));

} 