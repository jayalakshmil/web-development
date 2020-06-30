var div3 = document.getElementById('div-3');
div3.addEventListener('dblclick',
function(){
    alert('div-3 has been doubledclick')
});

function log(message){
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML= messageDiv.innerHTML+ message + '<br>';
    }
    
    log('hello');
    log('world');