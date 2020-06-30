function log (fun){
    var functions = document.getElementById('fun');
    functions.innerHTML = functions.innerHTML + fun + '<br/>';
}

function foo(){  // foo will return undefined
    log( ' foo was called' );
}

var result = foo();
log( result );

// function declaration syntax
function sum ( a, b){
    return a+b;
}
result = sum (1 ,2);
log (result);

// function expression syntax  to create functions

var addition = function ( a,b ){
    return a+b ;
}

log (addition ( 5,6 ));
