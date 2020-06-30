function log(message){
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>';
}
var greeting = "hello g\"d morning";
log(greeting);
log ( typeof greeting );
log(greeting.length );

var x = null;
log(x);
var y = undefined;
log(y);
