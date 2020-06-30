function log(two2){
    var three3 = document.getElementById('two2');
    three3.innerHTML = three3.innerHTML + two2 + '</br>';
}
 log(x);
var x = 2;
log(x);
 // Globle Variable : A globle that is a declared  outside of all functions 
// the lines 5,7,12,14 var before DECLERATION  for log this is called variable HOISTING

 function foo(){
     log('y is ' +y);
    var y = 3; // function-scoped variables
    log('y is' +y);
    log ('within foo is'+ x);
    log ('within foo is' + y);
    if (true){
        var z = 4;
        log ('within foo if block , z is' + z);
    }
    log('outside foo if block , z is' + z);  
 }

 foo(); // y gets created here
//  log ('within foo if block , z is' + z);
//  log('outside foo if block , z is' + z); 

 

//  var x = null;
//  log(x);
//  var y= undefined;
//  log(y);