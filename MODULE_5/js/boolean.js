function log(message){
   var messagediv = document.getElementById('message');
   messagediv.innerHTML = messagediv.innerHTML + message + '</br>';
}

var flag = true;
var flag2= false;
log(flag);
log(flag2);
