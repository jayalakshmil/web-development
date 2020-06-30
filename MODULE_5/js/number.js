function log(num){
    var number = document.getElementById('num');
    number.innerHTML= number.innerHTML + num + '<br/>';
}

// Number
// toPrecision vs toFixed
// parseInt and parseFloat 

var price = 1.2345;
log(price.toFixed(2)); // only after the decimal point
log(price.toPrecision(2));  //includes before and after decimal point