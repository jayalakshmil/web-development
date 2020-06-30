function log(opp){
    var operaters = document.getElementById('opp');
    operaters.innerHTML = operaters.innerHTML + opp + '</br>';
}

log( 1 + 2 );
log( 3 / 2 );
log( 8 % 3);

var x = 10;
log( ++x);

// In this two special operaters there are " '===' & ' !== ' "

var a = 10 , b = '10';
log( a == b ); 
log( a === b ); 