function log(dob){
    var birth = document.getElementById('dob');
    birth.innerHTML=birth.innerHTML+dob+ '<br/>';
}

var d = new Date();
log(d);

log(d.getDate());
log(d.getFullYear());

var newDate = d.getDate()+1;
d.setDate(newDate);

log(d);