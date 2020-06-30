function log(opp){
    var operaters = document.getElementById('opp');
    operaters.innerHTML = operaters.innerHTML + opp + '</br>';
}

var temp = 100;
if ( temp > 98.6){
    log( 'fever');
}
else {
    log('normal');
}


// for loops

for ( var i = 1 ; i<=20 ; i++ ) {
 log (i);
}

//  ARRAY 

var fruits = ['apple' , 'bannana' ,' pineapple', 'strawberry' , 'orange'];

var str = "<ul>";
for ( i=0; i < fruits.length; i++ ){
 str = str + "<li>" + fruits[i] + "</li>";
}
str = str + "</ul>";
log(str);