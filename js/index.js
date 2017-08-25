function getparam() {
    let n = parseInt(document.getElementById('param').value);
    document.getElementById('result').innerHTML = fib(n);
}

function fib(n) {
    if (n === 0) {
        return 0;
    }
    else if (n <= 2) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
}
function getparam1() {
    let n = parseInt(document.getElementById('param1').value);
    document.getElementById('result1').innerHTML = fib1(n);
}

function fib1(n) {
     var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

