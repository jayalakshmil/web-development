function log(arg){
    var type = document.getElementById('arg');
    type.innerHTML = type.innerHTML + arg + '<br/>';
}

function sum (){
 for ( var i=0 , result=0; i < arguments.length ; i++ ){
result = result + arguments [i]; 
 }
 return result;
}

log ( sum (1,2,3,4));//10
log (sum(1,2,3,4,5,6,7,8,9)); //45